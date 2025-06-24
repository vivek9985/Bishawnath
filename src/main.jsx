import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import ContactPage from "./pages/contact/ContactPage";
import About from "./pages/about/About";
import { Toaster } from "sonner";
import Package from "./pages/package/Package";
import ProjectPage from "./pages/project/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/package",
        element: <Package />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        style: {
          background: "#c9f31d",
          width: "auto",
        },
        classNames: {
          error: "bg-red-400",
          success: "text-green-400",
          warning: "text-yellow-400",
          info: "bg-blue-400",
        },
      }}
      position="bottom-left"
    />
  </React.StrictMode>
);
