import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/index.js'

export const employeeSignIn = createAsyncThunk(
  'employeeSignIn',
  async ({ formData, navigate }) => {
    try {
      console.log(formData)
      const res = await api.employeeSignIn(formData);
      navigate('/');
      return res.data;
    } catch (error) {
      const res = error.response.data;
      return res;
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
      state.status = 'pending for sign in employee';
    },
    [employeeSignIn.fulfilled]: (state, action) => {
      if(action.payload.token){
        localStorage.setItem(
          'employeeProfile',
          JSON.stringify(action?.payload)
        );
        state.status = 'sign in successfull !'
        state.employees = action?.payload;
      }
    },
    [employeeSignIn.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [getEmployees.pending]: (state, action) => {
      state.status = 'pending for get employees';
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.status = 'get employees successfull !';
      state.employeeData = action?.payload;
    },
    [getEmployees.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [getEmployeeById.pending]: (state, action) => {
      state.status = 'pending for get employees by id';
      state.loading = true
    },
    [getEmployeeById.fulfilled]: (state, action) => {
      state.status = 'get employee successfull !';
      state.employee = action?.payload;
      state.loading = false
    },
    [getEmployeeById.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [updateEmployee.pending]: (state, action) => {
      state.status = 'pending for update employee ';
      state.loading = true
    },
    [updateEmployee.fulfilled]: (state, action) => {
      state.status = 'update employee successfull ';
      state.employee = action?.payload;
      state.loading = false
    },
    [updateEmployee.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});
export const { signOut } = employeeAuthSlice.actions;
export default employeeAuthSlice.reducer;