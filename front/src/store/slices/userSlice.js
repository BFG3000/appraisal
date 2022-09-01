import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { id: '', name: '', email: '', username: '' },
    isAuthenticated: false,
    userType: '',
  },
  reducers: {
    getUserData(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userType = action.payload.userType;
    },
    signin(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    loadUser(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout(state, action) {
      state.user = { role: "" };
      state.isAuthenticated = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
