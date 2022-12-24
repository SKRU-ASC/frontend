import React from "react";
import ReactDOM from "react-dom/client";
import { ClickToComponent } from "click-to-react-component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/error_page";
import "./assets/css/index.css";
import ResponsiveAppBar from "./components/appbar";
import LandingPage from "./pages/landing_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveAppBar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ClickToComponent />
  </React.StrictMode>
);
