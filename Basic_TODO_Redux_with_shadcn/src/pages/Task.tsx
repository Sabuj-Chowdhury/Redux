import TaskCard from "@/components/module/task/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

function Task() {
  // way - 1
  // const { tasks } = useAppSelector((state) => state.todo);
  // console.log(tasks);
  // way - 2
  // const tasks = useAppSelector((state) => state.todo.tasks);
  // console.log(tasks);

  // way - 3 (preferred)
  const tasks = useAppSelector(selectTask);
  console.log(tasks);

  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-3xl font-bold">Tasks</h1>
      </div>
      <div className="space-y-5">
        {tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
}

export default Task;
