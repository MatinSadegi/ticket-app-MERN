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
    userSignOut: (state, action) => {
      localStorage.removeItem('userProfile');
      state.users = null;
    },
  },
  extraReducers: {
    [userSignIn.pending]: (state, action) => {
      state.status = 'pending for sign in';
    },
    [userSignIn.fulfilled]: (state, action) => {
      localStorage.setItem(
        'userProfile',
        JSON.stringify({ ...action?.payload })
      );
      state.status = 'sign in succsessss!!!';
      state.users = action?.payload;
    },
    [userSignUp.pending]: (state, action) => {
      state.status = 'pending for sign up';
    },
    [userSignUp.fulfilled]: (state, action) => {
      localStorage.setItem(
        'userProfile',
        JSON.stringify({ ...action?.payload })
      );
      state.status = 'sign up succsessss!!!';
      state.authData = action.payload;
    },
    [getUsers.pending]: (state, action) => {
      state.status = 'pending for sign in';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = 'sign in succsessss!!!';
      state.usersData = action?.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
    [getUsersLength.fulfilled]: (state, action) => {
      state.status = 'sign in succsessss!!!';
      state.usersLength = action?.payload;
    },
    [getUsersLength.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
  },
});
export const { userSignOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;
