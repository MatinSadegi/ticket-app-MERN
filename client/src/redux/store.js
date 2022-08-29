import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import postReducer from './cardSlice';
import answerReducer from './Post/answerSlice'
import userAuthReducer from './Auth/userAuthSlice';
import errorReducer from './errorSlice';
import employeeAuthReducer from './Auth/employeeAuthSlice'

export const store = configureStore({
    reducer:{
        fetch:postReducer,
        answer:answerReducer,
        error: errorReducer,
        userAuth: userAuthReducer,
        employeeAuth:employeeAuthReducer
    },
    middleware:[thunk]
})