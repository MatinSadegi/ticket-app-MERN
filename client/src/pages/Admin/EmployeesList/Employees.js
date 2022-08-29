import React,{useEffect} from 'react';
import Employee from './Employee';
import {useDispatch,useSelector} from 'react-redux'
import { getEmployees } from '../../../redux/Auth/employeeAuthSlice';

const Employees = () => {
  const dispatch = useDispatch()
  const employeesData = useSelector((state) => state.employeeAuth.employeeData);

useEffect(() => {
  dispatch(getEmployees());
}, [dispatch]);
   
  return (
    <div className='w-full px-8 py-4 '>
      <h1 className='font-bold text-2xl'>اساتید</h1>
      <div
        dir='ltr'
        className=' grid grid-cols-10 text-left mt-6 mb-2 font-Roboto text-sm  font-medium '
      >
        <p className='col-span-3  py-3 pl-3'>id</p>
        <p className='col-span-2  py-3 pl-3'>First Name</p>
        <p className='col-span-2  py-3 pl-3'>Last Name</p>
        <p className='col-span-3  py-3 pl-3'>National Code</p>
      </div>
      <div>
        {employeesData.map((employee) => {
          return (
            <Employee
              firstName={employee.firstName}
              lastName={employee.lastName}
              nationalCode={employee.nationalCode}
              id={employee._id}
              key={employee._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Employees;
