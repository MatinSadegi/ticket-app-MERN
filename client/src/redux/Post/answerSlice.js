import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const createAnswer = createAsyncThunk ('createAnswer', async({answer,id}) =>{
    try {
        const res = await api.createAnswer(answer,id)
        return res.data
    } catch (error) {
        console.log(error)
    }
}) 

export const getAnswer = createAsyncThunk('getAnswer', async(id) => {
    try {
        const res = await api.getAnswer(id)

        return res.data
    } catch (error) {
        console.log(error)
    }
});

const answerSlice = createSlice({
  name: 'answer',
  initialState: {answer:'', status:null},
  reducers: {},
  extraReducers: {
    [createAnswer.pending]: (state) => {
      state.status = 'pending';
    },
    [createAnswer.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.answer = action.payload
      console.log(action.payload);
    },
    [createAnswer.rejected]: (state) => {
      state.status = 'rejected';
    },
    [getAnswer.pending]: (state) => {
      state.status = 'pending';
    },
    [getAnswer.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.answer = action.payload
    },
    [getAnswer.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export default answerSlice.reducer;