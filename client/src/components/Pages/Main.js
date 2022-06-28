import React from 'react';
import { Link } from 'react-router-dom';


function Main() {
  return (
    <div>
      <div className="w-full h-96 bg-[url('./images/pexels-jess-bailey-designs-1764433.jpg')] bg-cover bg-center bg-black bg-opacity-80 bg-blend-darken flex items-center justify-center flex-col  ">
        <h1 className='text-white text-xl sm:text-2xl tracking-wide px-10 text-center '>
          {' '}
          به سامانه پاسخگویی به مشکلات دانشگاه پیام نور استان آذربایجان غربی خوش
          آمدید ...
        </h1>
        {/* <Link
          to='/form'
          className='flex items-center bg-white max-w-fit mt-7 font-yekan text-lg overflow-hidden after:transition-[height, width] rounded-lg py-2.5 px-3 relative z-0 hover:text-white after:content-[""] after:rounded-md after:absolute after:bottom-0 after:left-0 after:block after:w-0 after:h-0  after:transition-[height, width] after:duration-300 after:-z-10 after:bg-purple-500 hover:after:w-full hover:after:h-full group active:after:bg-purple-900 active:after:duration-[10ms] '
        >
          <img
            src='https://img.icons8.com/ultraviolet/16/9b59b6/pencil--v1.png'
            alt='pencil'
           />
          <span className='text-purple-500 relative font-semibold text-sm mr-2 group-hover:text-white  '>
            ارسال تیکت
          </span>
        </Link> */}
      </div>
    </div>
  );
}

export default Main;
