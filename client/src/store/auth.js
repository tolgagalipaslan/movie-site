import { createSlice } from "@reduxjs/toolkit";

const initialUser =
  JSON.parse(localStorage.getItem("user")) === null
    ? {}
    : JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: initialUser,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      console.log(action.payload);
      state.user = {
        subId: action.payload._id,
        userName: action.payload.userName,
        email: action.payload.email,
      };

      localStorage.setItem(
        "user",
        JSON.stringify({
          subId: action.payload._id,
          userName: action.payload.userName,
          email: action.payload.email,
        })
      );
    },
    login: (state, action) => {
      console.log(action.payload);

      state.user = {
        subId: action.payload._id,
        userName: action.payload.userName,
        email: action.payload.email,
      };
      localStorage.setItem(
        "user",
        JSON.stringify({
          subId: action.payload._id,
          userName: action.payload.userName,
          email: action.payload.email,
        })
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { register, login } = authSlice.actions;

export default authSlice.reducer;
