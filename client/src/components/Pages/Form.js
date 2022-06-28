import React, { useState } from 'react';
import CityList from '../CityList/CityList';
import { ErrorMessage } from '../Auth/ErrorMessage';

import { setError, setErrorMessage } from '../../redux/errorSlice';
import { useDispatch } from 'react-redux';
import { createPosts } from '../../redux/cardSlice';
import { Link, useNavigate } from 'react-router-dom';
import { unwrapResult } from '@reduxjs/toolkit';
const Form = () => {
  
  const [selected, setSelected] = useState(
    'لطفا مرکز تحصیل خود را وارد کنید ...'
  );
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    field: '',
    studentNumber: '',
    nationalCode: '',
    educationCenter: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(createPosts({ postData, navigate }));
    const orginalResult = unwrapResult(result);
    dispatch(setError(true));
    dispatch(setErrorMessage(orginalResult));

  };

  return (
    <form onSubmit={handleSubmit} className=' max-w-[80%] m-auto my-10 relative '>
      <div className=''>
        <ErrorMessage />
        <h1 className='mb-2 text-lg font-semibold text-gray-700'>مرکز تحصیل</h1>
        <CityList
          postData={postData}
          setPostData={setPostData}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className='w-full flex justify-between flex-wrap gap-6 mt-10  '>
        <div className='  w-full sm:w-[300px] '>
          <h1 className='font-semibold text-lg'>شماره دانشجویی</h1>
          <input
            className='input appearance-none'
            type='text'
            onChange={(e) => {
              setPostData({ ...postData, studentNumber: e.target.value });
              dispatch(setError(false));
              dispatch(setErrorMessage(null));
            }}
            placeholder='شماره دانشجویی خود را وارد کنید ...'
            required
          />
        </div>
        <div className='w-full sm:w-[300px]'>
          <h1 className='font-semibold text-lg'> رشته تحصیلی </h1>
          <input
            className='input'
            type='text'
            onChange={(e) =>{
              setPostData({ ...postData, field: e.target.value })
              dispatch(setError(false));
              dispatch(setErrorMessage(null));
            }}
            placeholder='رشته تحصیلی خود را وارد کنید ...'
            required
          />
        </div>
      </div>
      <div className='sm:w-[300px] mt-10 '>
        <h1 className='font-semibold text-lg'> شماره ملی </h1>
        <input
          className='input'
          type='text'
          onChange={(e) => {
            setPostData({ ...postData, nationalCode: e.target.value });
            dispatch(setError(false));
            dispatch(setErrorMessage(null));
          }}
          placeholder='شماره ملی خود را وارد کنید ...'
          required
        />
      </div>
      <div className='my-10 bg-gray-200 p-4 rounded-md'>
        <h1 className='font-semibold text-red-600 text-lg mb-1 '>توجه</h1>
        <p>
          برای ثبت درخواست باید در سایت{' '}
          <Link
            to='/auth'
            className='text-purple-400 hover:text-purple-600 px-1 cursor-pointer'
          >
            {' '}
            ثبت نام{' '}
          </Link>{' '}
          کنید . اگر قبلا ثبت نام کرده اید می توانید با فشار دادن دکمه{' '}
          <Link
            to='/auth'
            className='text-sky-400 hover:text-sky-600 px-1 cursor-pointer '
          >
            ورود
          </Link>{' '}
          وارد حساب خود شوید
        </p>
      </div>
      <div className='w-full p-4 bg-purple-200 rounded-md'>
        <div className='w-full mb-8'>
          <h1 className='mb-2 font-semibold'>موضوع درخواست</h1>
          <input
            className='input bg-white text-gray-800'
            type='text'
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            placeholder='موضوع درخواست را وارد کنید ...'
            required
          />
        </div>
        <div>
          <h1 className='mb-2 font-semibold'>درخواست</h1>
          <textarea
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            className='w-full px-4 py-2 h-24 outline-none focus:border-2 focus:border-purple-500 rounded-md placeholder:text-sm '
            placeholder='لطفا شرح درخواست خود را به همراه اطلاعات کامل جهت پاسخگویی بهتر وسریعتر در این قسمت وارد کنید .'
          ></textarea>
        </div>
      </div>
      <button
        type='submit'
        className=' mt-6 px-5 w-full py-3 overflow-hidden rounded-md relative z-10 text-white sm:w-fit  after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-purple-500 after:rounded-md after:-z-20  before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-purple-800 before:-z-10 before:transition-all before:duration-500 hover:before:w-full '
      >
        ارسال درخواست
      </button>
    </form>
  );
};

export default Form;
