import React from "react";
import ReactDOM from "react-dom/client";
import { ClickToComponent } from "click-to-react-component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import "./assets/css/index.css";
import ResponsiveAppBar from "./components/appbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveAppBar />,
    children: [
      {
        path: "/",
        element: <App />,
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
