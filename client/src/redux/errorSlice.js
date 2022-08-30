import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errorMessage: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      const { errorMessage } = action.payload;
      state.errorMessage = errorMessage;
    },
  },
});

export const {setError} = errorSlice.actions;
export default errorSlice.reducer;
