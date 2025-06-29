import type { RootState } from "@/redux/store";
import type { ITask } from "@/taskTypes";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "low" | "high" | "medium";
}

const initialState: IInitialState = {
  tasks: [],
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
  },
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
