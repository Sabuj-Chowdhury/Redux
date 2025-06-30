import type { RootState } from "@/redux/store";
import type { IUser } from "@/taskTypes";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  user: IUser[];
}

const initialState: IInitialState = {
  user: [],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.user.push(userData);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.users.user;
};

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
