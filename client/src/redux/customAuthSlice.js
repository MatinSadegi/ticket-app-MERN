import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/index.js';

export const signin = createAsyncThunk(
  'signin',
  async ({ formData, navigate}) => {
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
export const signup = createAsyncThunk(
  'signup',
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

const customAuthSlice = createSlice({
  name: 'customAuth',
  initialState: {
    authData:null,
    status: 'null',
  },
  reducers: {},
  extraReducers: {
    [signin.pending]: (state, action) => {
      state.status = 'pending for sign in';
    },
    [signin.fulfilled]: (state, action) => {
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      state.status = 'sign in succsessss!!!';
      state.authData = action?.payload;
    },
    [signup.pending]: (state, action) => {
      state.status = 'pending for sign in';
    },
    [signup.fulfilled]: (state, action) => {
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      state.status = 'sign in succsessss!!!';
      state.authData = action.payload;
    },
  },
});

export default customAuthSlice.reducer;
