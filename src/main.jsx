import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditMemo from "./pages/EditMemo.jsx";
import MemoDetail from "./pages/MemoDetail.jsx";
import Memos from "./pages/Memos.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Memos /> },
      { path: "memos", element: <Memos /> },
      { path: "memos/edit", element: <EditMemo /> },
      { path: "memos/edit/:memoId", element: <EditMemo /> },
      { path: "memos/detail/:memoId", element: <MemoDetail /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
