import type { ITask } from "@/taskTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
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
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
