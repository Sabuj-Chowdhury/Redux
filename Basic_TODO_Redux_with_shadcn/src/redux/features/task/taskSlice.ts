import type { RootState } from "@/redux/store";
import type { ITask } from "@/taskTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "low" | "high" | "medium";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "asbaj",
      title: "init frontend",
      description: "create home page",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "ahjdgj",
      title: "init backend",
      description: "create api",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
