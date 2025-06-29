import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

function Task() {
  // way - 1
  // const { tasks } = useAppSelector((state) => state.todo);
  // console.log(tasks);
  // way - 2
  // const tasks = useAppSelector((state) => state.todo.tasks);
  // console.log(tasks);

  const tasks = useAppSelector(selectTask);
  console.log(tasks);

  return <div>This the Task page</div>;
}

export default Task;
