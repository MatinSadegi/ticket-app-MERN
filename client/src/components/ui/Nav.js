import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/Auth/employeeAuthSlice';
import { userSignOut } from '../../redux/Auth/userAuthSlice';
import { Link, useNavigate} from 'react-router-dom';
import Logo from '../../images/jira-3.svg';

const Nav = () => {
  const navigate = useNavigate()
  const employeesData = useSelector((state) => state.employeeAuth.employees);
  const userData = useSelector(state => state.userAuth.users)
  const [hamburger, setHamburger] = useState(false);
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signOut());
    dispatch(userSignOut());
    navigate('/') 
  };

  return (
    <div className=' min-h-[8vh] w-full px-5 py-2 border-b flex justify-between items-center font-yekan '>
      <div className=' md:hidden w-full flex justify-between items-center'>
        <div
          onClick={() => setHamburger(!hamburger)}
          className=' cursor-pointer top-10 right-6 z-40 '
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
        <img src={Logo} alt='logo' className='w-8 h-8' />
      </div>

      <div
        className={`h-screen w-[100vw] bg-gray-200 py-20 px-7 flex flex-col items-center absolute z-30  top-0 right-0 transition-[opacity,transform] duration-500 ease-out md:px-0 md:py-0 md:h-full md:w-full md:relative md:flex-row md:bg-transparent md:justify-between ${
          hamburger ? '-translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        {employeesData || userData ? (
          <div className='flex items-center'>
            <div className='bg-sky-200 p-1.5 rounded-full ml-4'>
              <img
                src='https://img.icons8.com/office/40/000000/user-male-skin-type-3.png'
                alt='avatar'
              />
            </div>
            <button
              onClick={signOutHandler}
              className=' button-style after:bg-red-500 before:bg-red-700  '
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
        <nav className='flex order-last items-center  text-gray-400 gap-4'>
          <Link
            to='/questions'
            onClick={() => setHamburger(!hamburger)}
            className='hover:scale-110 hover:text-purple-500 transition-transform duration-500'
          >
            درخواست ها
          </Link>
          <Link
            to='/'
            onClick={() => setHamburger(!hamburger)}
            className='hover:scale-110 hover:text-purple-500 transition-transform duration-500'
          >
            صفحه اصلی
          </Link>
          <Link
            to='/admin'
            onClick={() => setHamburger(!hamburger)}
            className={`hover:scale-110 hover:text-purple-500 transition-transform duration-500 ${
              employeesData && employeesData.employee.admin ? 'block' : 'hidden'
            }`}
          >
            صفحه ادمین
          </Link>
        </nav>
        <label className='w-[70%] py-12 relative block md:py-0 md:w-56 md:order-last'>
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
