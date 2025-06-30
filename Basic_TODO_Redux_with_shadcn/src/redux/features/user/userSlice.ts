import type { IUser } from "@/taskTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: IUser[];
}

const initialState: IInitialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
