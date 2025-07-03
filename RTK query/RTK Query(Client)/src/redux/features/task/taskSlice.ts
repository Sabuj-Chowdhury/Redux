import type { RootState } from "@/redux/store";
import type { ITask } from "@/taskTypes";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import { deleteUser } from "../user/userSlice";
// import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "low" | "high" | "medium";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "36z-Fd7J8tW1OUs5O40CT",
      isCompleted: false,
      title: "Sit pariatur Anim e",
      description: "Quod aliquam volupta",
      priority: "low",
      dueDate: "2025-06-18T18:30:00.000Z",
      assignedTo: null,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      // state.tasks.push(action.payload);

      // way : 1
      // const id = uuidv4();
      // const taskData = {
      //   ...action.payload,
      //   id,
      //   isCompleted: false,
      // };

      // way : 2
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTask: (
      state,
      action: PayloadAction<"low" | "medium" | "high" | "all">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleIsCompleted, deleteTask, filterTask } =
  taskSlice.actions;
export default taskSlice.reducer;
