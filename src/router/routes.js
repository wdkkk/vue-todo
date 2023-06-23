import Tasks from "@/pages/Tasks";
import Progress from "@/pages/Progress";

const routes = [
  {
    name: "Progress",
    path: "/",
    component: Progress,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: Tasks,
  },
];

export default routes;
