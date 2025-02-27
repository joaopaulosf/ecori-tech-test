import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import Home from "./routes/Home.jsx";
import NewTask from "./routes/NewTask.jsx";
import SingleTask from "./routes/SingleTask.jsx";
import UploadFile from "./routes/UploadFile.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewTask />,
      },
      {
        path: `tasks/:taskId`,
        element: <SingleTask />,
      },
      {
        path: `upload`,
        element: <UploadFile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
