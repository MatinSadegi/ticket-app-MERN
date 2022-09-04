import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../../redux/Auth/userAuthSlice';
import Student from './Student';

const StudentList = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.userAuth.usersData)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className='h-14 bg-indigo-500 grid grid-cols-3 text-white text-sm lg:hidden'>
        <Link
          to='/admin'
          className='flex flex-col items-center justify-center cursor-pointer '
        >
          <p>اساتید</p>
          <img
            src='https://img.icons8.com/material-rounded/24/ffffff/knowledge-sharing.png'
            alt='knowledge-sharing-icon'
          />
        </Link>
        <Link
          to='/admin/students'
          className='flex flex-col items-center justify-center cursor-pointer bg-indigo-800'
        >
          <p>دانشجویان</p>
          <img
            src='https://img.icons8.com/external-those-icons-fill-those-icons/19/ffffff/external-Student-school-and-education-those-icons-fill-those-icons-4.png'
            alt='student-icon'
          />
        </Link>
        <Link
          to='/admin/permissions'
          className='flex flex-col items-center justify-center cursor-pointer'
        >
          <p> مجوز ها</p>
          <img
            src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/ffffff/external-key-user-tanah-basah-glyph-tanah-basah.png'
            alt='permissions-icon'
          />
        </Link>
      </div>
      <div className='w-full px-8 py-4 '>
        <h1 className='font-bold text-2xl hidden lg:block'>دانشجویان</h1>
        <div
          dir='ltr'
          className=' grid grid-cols-10 md:grid-cols-9 text-left mt-6 mb-1 font-Roboto text-sm  font-medium '
        >
          <p className='col-span-3 py-3 pl-3 hidden md:block'>id</p>
          <p className='col-span-3 md:col-span-1 py-3 pl-3'>First Name</p>
          <p className='col-span-3 md:col-span-1 py-3 pl-3'>Last Name</p>
          <p className='col-span-4 md:col-span-2 py-3 pl-3'>National Code</p>
          <p className='col-span-2 py-3 pl-3 hidden md:block'>Student Number</p>
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
    </>
  );
};

export default StudentList;
