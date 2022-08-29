import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/Auth/userAuthSlice';
import Student from './Student';

const StudentList = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.userAuth.usersData)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className='w-full px-8 py-4 '>
      <h1 className='font-bold text-2xl'>دانشجویان</h1>
      <div
        dir='ltr'
        className=' grid grid-cols-9 text-left mt-6 mb-1 font-Roboto text-sm  font-medium '
      >
        <p className='col-span-3  py-3 pl-3'>id</p>
        <p className='col-span-1  py-3 pl-3'>First Name</p>
        <p className='col-span-1  py-3 pl-3'>Last Name</p>
        <p className='col-span-2  py-3 pl-3'>National Code</p>
        <p className='col-span-2  py-3 pl-3'>Student Number</p>
      </div>
      <div>
        {usersData.map((student) => {
          return (
            <Student
              firstName={student.firstName}
              lastName={student.lastName}
              nationalCode={student.nationalCode}
              studentNumber={student.studentNumber}
              id={student._id}
              key={student._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
