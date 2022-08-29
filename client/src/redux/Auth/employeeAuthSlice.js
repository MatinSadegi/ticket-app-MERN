import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/index.js'

export const employeeSignIn = createAsyncThunk(
  'employeeSignIn',
  async ({ formData, navigate }) => {
    try {
      const res = await api.employeeSignIn(formData);
      navigate('/');
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res.message;
    }
  }
);

export const getEmployees = createAsyncThunk('getEmployees', async() => {
    try {
        const res = await api.getEmployees();
        return res.data
    } catch (error) {
       console.log(error) 
    }
})
export const getEmployeeById = createAsyncThunk('getEmployeeById', async (id) => {
  try {
    const res = await api.getEmployeeById(id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateEmployee = createAsyncThunk(
  'updateEmployee',
  async ({id, permissions}) => {
    try {
      const res = await api.updateEmployee(id, permissions);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const employeeAuthSlice = createSlice({
  name: 'employeeAuth',
  initialState: {
    employees: localStorage.getItem('employeeProfile')
      ? JSON.parse(localStorage.getItem('employeeProfile'))
      : null,
    status: 'null',
    employeeData: [],
    employee:null,
    loading:false
  },
  reducers: {
    signOut: (state, action) => {
      localStorage.removeItem('employeeProfile');
      state.employees = null;
    },
  },
  extraReducers: {
    [employeeSignIn.pending]: (state) => {
      state.status = 'pending for sign in';
    },
    [employeeSignIn.fulfilled]: (state, action) => {
      localStorage.setItem(
        'employeeProfile',
        JSON.stringify({ ...action?.payload })
      );
      state.status = 'sign in succsessss!!!';
      state.employees = action?.payload;
    },
    [employeeSignIn.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
    [getEmployees.pending]: (state, action) => {
      state.status = 'pending for sign in';
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.status = 'sign in succsessss!!!';
      state.employeeData = action?.payload;
    },
    [getEmployees.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
    [getEmployeeById.pending]: (state, action) => {
      state.status = 'pending';
      state.loading = true
    },
    [getEmployeeById.fulfilled]: (state, action) => {
      state.status = 'sign in succsessss!!!';
      state.employee = action?.payload;
      state.loading = false
    },
    [getEmployeeById.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
    [updateEmployee.pending]: (state, action) => {
      state.status = 'pending';
      state.loading = true
    },
    [updateEmployee.fulfilled]: (state, action) => {
      state.status = 'sign in succsessss!!!';
      state.employee = action?.payload;
      state.loading = false
    },
    [updateEmployee.rejected]: (state, action) => {
      state.status = 'rejecteeed';
    },
  },
});
export const { signOut } = employeeAuthSlice.actions;
export default employeeAuthSlice.reducer;