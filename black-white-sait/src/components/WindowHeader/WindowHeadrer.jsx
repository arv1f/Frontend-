import { useState } from "react";
import './WindowHeader.css'
import '../HeaderList/HeaderList.css'

export default function WindowHeader({ DivTextColor }) {
    const [mousecursor, setmousecursor] = useState(false);
    const [mousecursor2, setmousecursor2]=useState(false);

    const handleMouseOver = () => {
        setmousecursor(true);
    };
    const handleMouseOut = () => {
        setmousecursor(false);
    };
    const handleMouseOver2 = () => {
        setmousecursor2(true);
    };
    const handleMouseOut2 = () => {
        setmousecursor2(false);
    };
    return(
    <>{DivTextColor=='#242424' &&
      <ul style={{color: '#242424'}} className='listStyle'>
        <div className='divinul'
        onMouseOver={handleMouseOver}
        onMouseOut = {handleMouseOut}
        >Что это?<span style={{fontSize:'5px'}}>Наведи на меня</span></div>
        {mousecursor && <div className="divText">Вот вам яркий пример современных тенденций — постоянный количественный рост и сфера нашей активности, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. Имеется спорная точка зрения, гласящая примерно следующее: сторонники тоталитаризма в науке обнародованы.</div>}

        <div className='divinul'
        onMouseOver={handleMouseOver2}
        onMouseOut = {handleMouseOut2}
        >О нас.<span style={{fontSize:'5px'}}> И меня</span></div>
        {mousecursor2 && <div className="divText">Но глубокий уровень погружения играет определяющее значение для экономической целесообразности принимаемых решений. Идейные соображения высшего порядка, а также экономическая повестка сегодняшнего дня способствует повышению качества как самодостаточных, так и внешне зависимых концептуальных решений.</div>}
      </ul>}
    </>
    )
}