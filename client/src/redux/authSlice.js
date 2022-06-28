import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { authData: JSON.parse(localStorage.getItem('profile')) },
  reducers: {
    auth: (state, action) => {
      localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };
    },
    logout: (state, action) => {
      localStorage.clear();
      return { ...state, authData: null };
    },
  },
});

export const { auth,logout } = authSlice.actions;

export default authSlice.reducer;
