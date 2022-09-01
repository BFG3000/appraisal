import { configureStore } from '@reduxjs/toolkit';
// import adminSlice from "./slices/adminSlice";
import userSlice from './slices/userSlice';
import formSlice from './slices/formSlice';
// import examSlice from "./slices/examSlice";
import notificationSlice from './slices/notification';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    form: formSlice.reducer,
    notification: notificationSlice.reducer,
    // exam: examSlice.reducer,
    // admin: adminSlice.reducer,
  },
});

export default store;
