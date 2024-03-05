import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./pages/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";
import ContactPage, { loader as contactLoader } from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/contact/:contactId",
        element: <ContactPage />,
        loader: contactLoader,
      },
    ],
  },
  {
    path: "*",
    element: <Root />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
