import React from 'react';
import { useDispatch } from 'react-redux';
import { getEmployeeById } from '../../../redux/Auth/employeeAuthSlice';

const Permissions = ({ firstName, lastName, permissions, id, setShow }) => {
    const dispatch = useDispatch();  
  return (
    <div className='grid grid-cols-10 mb-6 items-center'>
      <p className='col-span-2'>
        {firstName} {lastName}
      </p>
      <div className='col-span-7 flex gap-4 flex-wrap'>
        {permissions.map((item) => (
          <p
            key={item}
            className=' bg-blue-300 text-white py-2 px-4 rounded-md text-xs font-yekan '
          >
            {item}
          </p>
        ))}
      </div>
      <div
        onClick={() => {
          setShow(true);
          dispatch(getEmployeeById(id));
        }}
        className='col-span-1 w-8 h-8 rounded-lg flex justify-center items-center cursor-pointer transition-all hover:border-[1.5px] '
      >
        <img
          src='https://img.icons8.com/material-outlined/20/9ca3af/edit--v1.png'
          alt='edit'
        />
      </div>
    </div>
  );
};

export default Permissions;
