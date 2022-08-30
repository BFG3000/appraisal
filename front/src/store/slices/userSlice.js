import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { id: '', name: '', email: '', username: '' },
    isAuthenticated: false,
    userType: '',
    userKind: '',
  },
  reducers: {
    getUserData(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userType = action.payload.userType;
      state.userKind = action.payload.userKind;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
