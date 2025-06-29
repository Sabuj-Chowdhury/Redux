import type { RootState } from "@/redux/store";
import type { ITask } from "@/taskTypes";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
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
      priority: "Low",
      dueDate: "2025-06-18T18:30:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
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
  },
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask, toggleIsCompleted } = taskSlice.actions;
export default taskSlice.reducer;
