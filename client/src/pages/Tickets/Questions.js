import React from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Questions = () => {
  const userProfile = JSON.parse(localStorage.getItem('userProfile'))
  const employeeProfile = JSON.parse(localStorage.getItem('employeeProfile'));
  if (userProfile) {
    return (
      <div className='mt-8 w-9/12 m-auto'>
        <Link
          to='/form'
          className='flex items-center max-w-fit mb-3 font-yekan text-lg border-2 border-purple-500 after:transition-[height, width] rounded-md py-2 px-3 relative z-0  hover:text-white  after:content-[""] after:absolute after:bottom-0 after:left-0 after:block after:w-0 after:h-0  after:transition-[height, width] after:duration-300 after:-z-10 after:bg-purple-500 hover:after:w-full hover:after:h-full group active:after:bg-purple-900 active:after:duration-[10ms] '
        >
          <img
            src='https://img.icons8.com/ultraviolet/16/9b59b6/pencil--v1.png'
            alt='pencil'
          />
          <span className='text-purple-500 relative font-semibold text-xs mr-2 group-hover:text-white  '>
            ارسال تیکت
          </span>
        </Link>
        <Cards />
      </div>
    );
  } else if (employeeProfile) {
    return (
      <div className=' w-11/12 sm:w-10/12 md:w-9/12 m-auto pt-10'>
        <Cards />
      </div>
    );
  }
  return (
    <div className=' w-11/12 sm:w-10/12 md:w-9/12 m-auto'>
      <div className='w-full py-2 my-7 bg-gradient-to-l from-yellow-100 to-orange-100 rounded-md px-3 '>
        <h1 className='text-center text-gray-600 text-sm sm:text-base'>
          برای ارسال تیکت{' '}
          <Link
            to='/auth'
            className='text-purple-400 hover:text-purple-600 px-1 cursor-pointer'
          >
            ثبت نام
          </Link>{' '}
          کنید و یا به حساب خود{''}
          <Link
            to='/auth'
            className='text-sky-400 hover:text-sky-600 px-1 cursor-pointer '
          >
            وارد
          </Link>
          {''}
          شوید !
        </h1>
      </div>
      <Cards />
    </div>
  );
  
}



export default Questions;