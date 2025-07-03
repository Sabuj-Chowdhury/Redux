import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseAPI";
import type { ITask } from "@/taskTypes";
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

  const { data, isLoading } = useGetTaskQuery(undefined);

  // console.log({ data, isError, isLoading });
  if (isLoading) {
    return <> Loading ...</>;
  }

  return (
    <div>
      <div className="flex justify-center items-center m-5">
        <h1 className="text-3xl font-bold">Tasks</h1>
      </div>
      <div className="flex justify-end gap-5 items-center m-2">
        <Tabs defaultValue="all" className="">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>

      <div className="space-y-5">
        {!isLoading &&
          data.tasks.map((task: ITask, idx: number) => (
            <TaskCard task={task} key={idx}></TaskCard>
          ))}
      </div>
    </div>
  );
}

export default Task;
