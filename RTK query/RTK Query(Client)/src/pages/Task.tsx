import { AddTaskModal } from "@/components/module/task/AddTaskModal";
// import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { filterTask, selectTask } from "@/redux/features/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function Task() {
  // way - 1
  // const { tasks } = useAppSelector((state) => state.todo);
  // console.log(tasks);
  // way - 2
  // const tasks = useAppSelector((state) => state.todo.tasks);
  // console.log(tasks);

  // way - 3 (preferred)
  // const tasks = useAppSelector(selectTask);
  // console.log(tasks);

  // dispatch
  // const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-3xl font-bold">Tasks</h1>
      </div>
      <div className="flex justify-end gap-5 items-center m-2">
        <Tabs defaultValue="all" className="">
          <TabsList>
            <TabsTrigger
              // onClick={() => dispatch(filterTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(filterTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(filterTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              // onClick={() => dispatch(filterTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>

      {/* <div className="space-y-5">
        {tasks.map((task, idx) => (
          <TaskCard task={task} key={idx}></TaskCard>
        ))}
      </div> */}
    </div>
  );
}

export default Task;
