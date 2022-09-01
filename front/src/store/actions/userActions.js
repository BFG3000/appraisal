import { userActions } from '../slices/userSlice';
import { notificationActions } from "../slices/notification";

import axios from 'axios';

export const loginUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.post('/api/login', user, config);
    dispatch(
      userActions.signin({
        user: data.user,
        isAuthenticated: true,
      })
    );
  } catch (error) {
    // dispatch(
    //   notificationActions.showNotification({
    //     loading: false,
    //     status: 'error',
    //     message: error.response.data.message,
    //   })
    // );
  }
};

export const signupUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // dispatch(
  //   notificationActions.showNotification({
  //     loading: true,
  //     status: 'pending',
  //     message: 'Signup in progress...',
  //   })
  // );
  try {
    const { data } = await axios.post('/api/signup', user, config);

    dispatch(
      userActions.signin({
        user: data.user,
        isAuthenticated: true,
      })
    );
  } catch (error) {
    // dispatch(
    //   notificationActions.showNotification({
    //     loading: false,
    //     status: 'error',
    //     message: error.response.data.message,
    //   })
    // );
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    await axios.get('/api/logout');
    dispatch(
      userActions.logout({
        isAuthenticated: false,
      })
    );
  } catch (error) {
    // dispatch(
    //   notificationActions.showNotification({
    //     loading: false,
    //     status: 'error',
    //     message: error.response.data.message,
    //   })
    // );
  }
};

export const logoutUser = (user) => async (dispatch) => {
  try {
    await axios.get('/api/logout');
    dispatch(
      userActions.logout({
        isAuthenticated: false,
      })
    );
  } catch (error) {
    // dispatch(
    //   notificationActions.showNotification({
    //     loading: false,
    //     status: 'error',
    //     message: error.response.data.message,
    //   })
    // );
  }
};

export const getUser = (user) => async (dispatch) => {
  try {
    dispatch(
      notificationActions.showNotification({
        loading: true,
        status: 'pending',
        message: 'Getting user data...',
      })
    );

    const { data } = await axios.get('/api/me');

    dispatch(
      userActions.loadUser({
        user: data.user,
        isAuthenticated: true,
      })
    );
    dispatch(
      notificationActions.showNotification({
        loading: false,
        status: 'success',
        message: 'User data retrieved!',
      })
    );
  } catch (error) {
    dispatch(
      notificationActions.showNotification({
        loading: false,
        status: 'erroruser',
        message: error.response.data.message,
      })
    );
  }
};
