import React, { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../../../redux/Auth/userAuthSlice';
import { setErrorMessage, setError } from '../../../redux/errorSlice';


const StudentSignUp = ({ setIsSignUp, setIsStudent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //States
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nationalCode: '',
    studentNumber: '',
    password: '',
  });

  //Functions

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(setError(false));
    dispatch(setErrorMessage(null));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(userSignUp({ formData, navigate }));
    const orginalResult = unwrapResult(result);
    dispatch(setError(true));
    dispatch(setErrorMessage(orginalResult));
  };

  return (
    <div className=' bg-white p-10 w-full flex flex-col items-center m-auto  lg:px-0 lg:w-1/2 lg:max-w-[600px] '>
      <div className='flex gap-6'>
        <div
          onClick={() => setIsStudent(true)}
          className='hover:scale-110 transition-all cursor-pointer rounded-md border-2 border-purple-100 p-2'
        >
          <img src='https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/FEF3C7/external-student-education-icongeek26-outline-gradient-icongeek26.png' alt='student-icon' />
          <span>دانشجویان</span>
        </div>
        <div
          onClick={() => setIsStudent(false)}
          className='flex flex-col items-center hover:scale-110 transition-all cursor-pointer p-2'
        >
          <img src='https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/000000/external-teacher-education-icongeek26-outline-gradient-icongeek26-1.png' alt='teacher-icon' />
          <span>اساتید</span>
        </div>
      </div>

      <form className='text-gray-800' onSubmit={handleSubmit}>
        <div>
          <div className='sm:flex sm:gap-8 mt-5'>
            <div className='sm:w-1/2'>
              <label htmlFor='firstName'>نام</label>
              <input
                onChange={handleChange}
                placeholder='نام'
                className='input mb-3 '
                required
                type='text'
                id='firstName'
                name='firstName'
              />
            </div>
            <div className='sm:w-1/2'>
              <label htmlFor='lastName'>نام خانوداگی</label>
              <input
                onChange={handleChange}
                placeholder='نام خانوادگی'
                className='input mb-3'
                required
                type='text'
                id='lastName'
                name='lastName'
              />
            </div>
          </div>
          <div className='sm:flex sm:gap-8 '>
            <div className='sm:w-1/2'>
              <label htmlFor='nationalCode'>کد ملی</label>
              <input
                onChange={handleChange}
                placeholder='کد ملی'
                className='input mb-3'
                required
                type='text'
                id='nationalCode'
                name='nationalCode'
              />
            </div>
            <div className='sm:w-1/2'>
              <label htmlFor='studentNumber'> شماره دانشجویی</label>
              <input
                onChange={handleChange}
                placeholder='شماره دانشجویی'
                className='input mb-3'
                required
                type='text'
                id='studentNumber'
                name='studentNumber'
              />
            </div>
          </div>
          <label htmlFor='password'>رمز عبور</label>
          <input
            onChange={handleChange}
            placeholder='رمز عبور'
            className='input'
            required
            type='password'
            id='password'
            name='password'
          ></input>
          <button className='w-full px-4 py-2 mt-6 bg-yellow-300 rounded-md font-bold transition-all duration-300 text-gray-800  hover:bg-yellow-400 hover:scale-105'>
            ثبت نام
          </button>
          <p className='text-xs mt-2'>
            {' '}
            اگر حساب دارید می توانید از این قسمت
            <span
              onClick={() => setIsSignUp(false)}
              className='text-sky-500 mx-0.5 text-sm cursor-pointer'
            >
              {' '}
              ورود
            </span>
            کنید
          </p>
        </div>
      </form>
    </div>
  );
};

export default StudentSignUp;
