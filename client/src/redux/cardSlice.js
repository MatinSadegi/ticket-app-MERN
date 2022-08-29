import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const getPosts = createAsyncThunk('getPosts', async () => {
  const res = await api.fetchPosts();
  return res.data;
});
export const getPostById = createAsyncThunk('getPostById', async (id) => {
  const res = await api.getPostById(id);
  return res.data;
});

export const createPosts = createAsyncThunk(
  'createPost',
  async (ticket) => {
    try {
      const res = await api.createPost(ticket);
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res.message;
    }
  }
);

const cardSlice = createSlice({
  name: 'card',
  initialState: { posts: [], currentPost:{}, status: 'null', errorMessage:'', loading:false },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = 'success';
      state.posts = action.payload.postMessages;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'errorrr';
    },
    [createPosts.fulfilled]: (state, action) => {
        state.status = 'post made successfully';
        state.posts = [...state.posts, action.payload];
    },
    [createPosts.rejected]: (state, action) => {
      state.status = 'failed to create post';
    },
    [getPostById.pending]: (state, action) => {
        state.status = 'pending';
        state.loading = true
    },
    [getPostById.fulfilled]: (state, action) => {
        state.status = 'get current post successfully';
        state.loading = false
        state.currentPost = action.payload;
    },
    [getPostById.rejected]: (state, action) => {
      state.status = 'rejected';
      state.loading = false;
    },
  },
});

export default cardSlice.reducer;
