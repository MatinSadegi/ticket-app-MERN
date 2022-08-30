import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/index.js';

export const userSignIn = createAsyncThunk(
  'userSignIn',
  async ({ formData, navigate }) => {
    try {
      const res = await api.signIn(formData);
      navigate('/');
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res.message;
    }
  }
);

export const userSignUp = createAsyncThunk(
  'userSignUp',
  async ({ formData, navigate }) => {
    try {
      const res = await api.signUp(formData);
      navigate('/');
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res.message;
    }
  }
);

export const getUsers = createAsyncThunk('getUsers', async () => {
  try {
    const res = await api.getUsers();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const getUsersLength = createAsyncThunk('getUsersLength', async () => {
  try {
    const res = await api.getUsersLength();
    return res.data;
  } catch (error) {
    console.log(error);
  }
});



const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    users: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile'))
      : null,
    status: 'null',
    usersData: [],
    usersLength:null
  },
  reducers: {
    userSignOut: (state) => {
      localStorage.removeItem('userProfile');
      state.users = null;
    },
  },
  extraReducers: {
    [userSignIn.pending]: (state) => {
      state.status = 'pending for sign in user';
    },
    [userSignIn.fulfilled]: (state, action) => {
      console.log(action.payload);
      if (action.payload.token) {
        localStorage.setItem('userProfile', JSON.stringify(action?.payload));
        state.status = 'sign in successfull !';
        state.users = action?.payload;
      }
    },
    [userSignUp.pending]: (state) => {
      state.status = 'pending for sign up user';
    },
    [userSignUp.fulfilled]: (state, action) => {
     if (action.payload.token) {
       localStorage.setItem('userProfile', JSON.stringify(action?.payload));
       state.status = 'sign up successfull !';
       state.users = action?.payload;
     }
    },
    [getUsers.pending]: (state) => {
      state.status = 'pending for get users';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'get user successfull !';
      state.usersData = action?.payload;
    },
    [getUsers.rejected]: (state) => {
      state.status = 'rejected';
    },
    [getUsersLength.fulfilled]: (state, action) => {
      state.status = 'get users length successfull !';
      state.usersLength = action?.payload;
    },
  },
});
export const { userSignOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
