import App from "@/App";
import Task from "@/pages/Task";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Task,
      },
      {
        path: "task",
        Component: Task,
      },
      {
        path: "users",
        Component: Users,
      },
    ],
  },
]);

export default router;
