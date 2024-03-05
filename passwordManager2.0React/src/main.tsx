import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AddUserPage from "./pages/AddUserPage.tsx";
import EditUserIdPage from "./pages/EditUserIdPage.tsx";
// import CollaboratePage from "./pages/CollaboratePages/CollaboratePage.tsx";
// import EditUserPage from "./pages/CollaboratePages/EditUserPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/collaborate",
  //   element: <CollaboratePage />,
  // },
  // {
  //   path: "/collaborate/edit",
  //   element: <EditUserPage />,
  //   children: [
  //     {
  //       path: ":userId",
  //       element: <EditUserIdPage />,
  //     },
  //   ],
  // },
  // {
  //   path: "/collaborate/edit/:userId",
  //   element: <EditUserIdPage />,
  // },
  {
    path: "/edit/:userId",
    element: <EditUserIdPage />,
  },
  {
    path: "/add",
    element: <AddUserPage />,
  },
  // {
  //   path: "/collaborate/delete",
  //   element: <DeleteUserPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
