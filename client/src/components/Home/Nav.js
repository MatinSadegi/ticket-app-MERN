import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const logouthandler = () => {
    dispatch(logout());
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className=' min-h-[8vh] px-5 py-2 border-b flex justify-between items-center font-yekan '>
      <div
        onClick={() => setHamburger(!hamburger)}
        className=' cursor-pointer top-10 right-6 z-40 sm:hidden   '
      >
        <div
          className={`hamburger  ${
            hamburger ? '-rotate-45 -translate-x-1 translate-y-1.5 ' : ''
          }`}
        ></div>
        <div className={`hamburger  ${hamburger ? 'opacity-0' : ''}`}></div>
        <div
          className={`hamburger  ${
            hamburger ? 'rotate-45 -translate-x-1 -translate-y-1.5  ' : ''
          }`}
        ></div>
      </div>

      <div
        className={`h-screen w-[100vw] bg-gray-200 py-20 px-7 flex flex-col items-center absolute z-30  top-0 right-0 transition-[opacity,transform] duration-500 ease-out sm:px-0 sm:py-0 sm:h-full sm:w-full sm:relative sm:flex-row sm:bg-transparent sm:justify-between ${
          hamburger ? '-translate-x-0' : 'translate-x-full sm:translate-x-0'
        }`}
      >
        {user ? (
          <div className='flex items-center'>
            <div className='bg-sky-200 p-1.5 rounded-full ml-4'>
              <img
                src='https://img.icons8.com/office/40/000000/user-male-skin-type-3.png'
                alt='avatar'
              />
            </div>
            <button
              onClick={logouthandler} 
              className=' h-9 overflow-hidden rounded-md relative z-10 px-5 text-white  after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-red-500 after:rounded-md after:-z-20  before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-red-700 before:-z-10 before:transition-all before:duration-500 hover:before:w-full '
            >
              خروج
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-3'>
            <Link
              to='/auth'
              className=' h-9 overflow-hidden rounded-md relative z-10 px-5 text-white flex items-center  after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-purple-500 after:rounded-md after:-z-20  before:bottom-0 before:left-0 before:absolute before:rounded-md before:w-0 before:h-full before:bg-purple-800 before:-z-10 before:transition-all before:duration-500 hover:before:w-full '
            >
              ثبت نام
            </Link>
            <Link
              to='/auth'
              className='px-5 h-9 border-2 transition-all duration-500 text-gray-400 flex items-center rounded-md hover:border-2 hover:text-sky-300 hover:border-sky-300 '
            >
              ورود
            </Link>
          </div>
        )}
        <nav className='flex order-last items-center text-gray-400 gap-4'>
          <Link
            to='/questions'
            className='hover:scale-110 hover:text-purple-500 transition-transform duration-500'
          >
            درخواست ها
          </Link>
          <Link
            to='/'
            className='hover:scale-110 hover:text-purple-500 transition-transform duration-500'
          >
            صفحه اصلی
          </Link>
        </nav>
        <label className='w-[70%] py-12 relative block sm:py-0 sm:w-56 sm:order-last'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <img
              src='https://img.icons8.com/ios-glyphs/17/cccccc/search--v1.png'
              alt='search-icon'
            />
          </span>
          <input
            className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm'
            placeholder='جست و جو'
            type='text'
            name='search'
          />
        </label>
      </div>
    </div>
  );
};

export default Nav;
