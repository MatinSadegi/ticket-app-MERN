import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: false,
  errorMessage: null,
};

export const errorSlice = createSlice({
    name:'error',
    initialState,
    reducers:{
        setError:(state, action) =>{
            state.error = action.payload
        },
        
        setErrorMessage:(state,action) =>{
            state.errorMessage = action.payload
        }
    }
})

export const {setError, setErrorMessage} = errorSlice.actions;

export default errorSlice.reducer