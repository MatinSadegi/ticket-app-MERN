import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import postReducer from './cardSlice';
import authReducer from './authSlice';
import customAuthReducer from './customAuthSlice';
import errorReducer from './errorSlice'

export const store = configureStore({
    reducer:{
        fetch:postReducer,
        auth: authReducer,
        error: errorReducer,
        customAuth: customAuthReducer,
    },
    middleware:[thunk]
})