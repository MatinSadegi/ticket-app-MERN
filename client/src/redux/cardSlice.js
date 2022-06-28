import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const getPosts = createAsyncThunk('getPosts', async () => {
  const res = await api.fetchPosts();
  return res.data;
});

export const createPosts = createAsyncThunk(
  'createPost',
  async ({ postData, navigate }) => {
    try {
      const res = await api.createPost(postData);
      navigate('/');
      console.log(res)
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res.message;
    }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState: { posts: [], status: 'null', users: [], errorMessage:'' },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts = action.payload.postMessages;
      state.users = action.payload.users;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'errorrr';
    },
    [createPosts.fulfilled]: (state, action) => {
      if (action.payload == null) {
        state.status = 'post made successfully';
        state.posts = [...state.posts, action.payload];
      } else {
        state.errorMessage = action.payload;
        console.log(action.payload);
      }
    },
    [createPosts.rejected]: (state, action) => {
      state.status = 'failed to create post';
    },
  },
});

export default cardSlice.reducer;
