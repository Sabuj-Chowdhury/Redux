import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/taskTypes";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteTask, toggleIsCompleted } from "@/redux/features/task/taskSlice";
import { selectUser } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);
  const assignedToUser = users.find((user) => user.id === task.assignedTo);

  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          {/* red circle */}
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h1 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500 cursor-pointer"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleIsCompleted(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
      <p className="mt-5">
        Assigned to : {assignedToUser ? assignedToUser.name : "no one"}
      </p>
    </div>
  );
};

export default TaskCard;
