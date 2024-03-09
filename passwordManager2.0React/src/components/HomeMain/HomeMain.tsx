import "./HomeMain.css";
import { useMainStore } from "../../store";
import { User, UserContext } from "../../interface";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableUser from "../SortableUser";

// interface PropsSort {
//   num: User;
//   marginRem: number;
//   users: User[];
//   setUsersList: Dispatch<React.SetStateAction<User[]>>;
// }

// const SortableUser = ({ num, marginRem, users, setUsersList }: PropsSort) => {
//   const { deleteUser } = useMainStore<UserContext>((state) => state);
//   const navigate = useNavigate();
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: num.id });
//   if (users.indexOf(num) === -1) return null;
//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     top: `${marginRem}rem`,
//     width: "40rem",
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       key={num.id}
//       className="MainChildren"
//     >
//       <div style={{ display: "inline", paddingRight: "6.528rem" }}>
//         name: <b>{num.name}</b>, url: <b>{num.url}</b>, password:{" "}
//         <b>{num.password}</b>.
//       </div>
//       <button
//         onClick={() => navigate(`/edit/${users.indexOf(num)}`)}
//         className="ButtonDelete" //edit
//         style={{
//           height: "1.3rem",
//           fontSize: "0.5rem",
//           marginTop: "2px",
//           position: "absolute",
//           right: "5.6rem",
//           paddingTop: 0,
//         }}
//       >
//         edit
//       </button>
//       <button
//         onClick={() => {
//           deleteUser(num.id);
//           setUsersList(users.filter((user) => user.id !== num.id));
//         }}
//         className="ButtonDelete"
//         style={{
//           height: "1.3rem",
//           fontSize: "0.5rem",
//           marginTop: "2px",
//           position: "absolute",
//           right: "1.6rem",
//           paddingTop: 0,
//         }}
//       >
//         delete
//       </button>
//     </div>
//   );
// };
interface Props {
  value: string;
  urlOrName: boolean;
}
const HomeMain = ({ value, urlOrName }: Props) => {
  const { users, deleteUser } = useMainStore<UserContext>((state) => state);
  let newList: User[] = [];
  users.forEach((element) => {
    if (!element.password || !element.id || !element.name || !element.url) {
      deleteUser(element.id);
    }
  });
  console.log(users);
  if (urlOrName && users.length > 0) {
    newList = users.filter((user) => user.url.includes(value));
  } else if (!urlOrName && users.length > 0) {
    newList = users.filter((user) => user.name.includes(value));
  }
  const [usersList, setUsersList] = useState<User[]>(newList);
  const heihgt: number = usersList.length;

  const onDragEnd = (event: DragEndEvent & { active: User; over: User }) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setUsersList((usersList) => {
      const oldIndex = usersList.findIndex((user) => user.id === active.id);
      const newIndex = usersList.findIndex((user) => user.id === over.id);
      return arrayMove(usersList, oldIndex, newIndex);
    });
  };
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <>
      <div className="MainContainer" style={{ height: `${heihgt * 2}rem` }}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          sensors={sensors}
        >
          <SortableContext
            items={usersList}
            strategy={verticalListSortingStrategy}
          >
            {usersList.map((num) => {
              let marginRem: number = users.indexOf(num);
              // if (num.name.length + num.url.length + num.password.length > 43) {
              //   marginRem = marginRem * 3.3 + 2;
              // } else {
              //   console.log(num);
              //   marginRem = marginRem * 2 + 2;
              // }
              marginRem = marginRem * 3.3 + 2;
              return (
                <SortableUser
                  key={num.id}
                  num={num}
                  marginRem={marginRem}
                  users={usersList}
                  setUsersList={setUsersList}
                />
              );
            })}
          </SortableContext>
        </DndContext>
      </div>
    </>
  );
};
export default HomeMain;
