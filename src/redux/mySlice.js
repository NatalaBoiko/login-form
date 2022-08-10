import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state, action) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

console.log(mySlice.actions);

export const { logIn, logOut } = mySlice.actions;
