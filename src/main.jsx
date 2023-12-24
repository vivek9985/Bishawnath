import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import AnimatedCursor from "react-animated-cursor";
import { Toaster } from "react-hot-toast";
import ContactPage from "./pages/contact/ContactPage";
import About from "./pages/about/About";

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
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <AnimatedCursor
      outerSize={20}
      innerScale={1}
      outerStyle={{
        backgroundColor: "#861cdd36",
      }}
      innerStyle={{
        background: "#861cdd",
      }}
    /> */}
    <Toaster />
  </React.StrictMode>
);
