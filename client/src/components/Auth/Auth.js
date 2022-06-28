import React, { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { ErrorMessage } from './ErrorMessage';
import { signin, signup } from '../../redux/customAuthSlice';
import { setErrorMessage, setError } from '../../redux/errorSlice';
import { auth } from '../../redux/authSlice';
import authImage from '../../images/question.jpg';

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //States
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  //Functions
  const handleSignup = () => {
    setIsSignUp(!isSignUp);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(setError(false))
    dispatch(setErrorMessage(null));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      const result = await dispatch(signup({ formData, navigate }));
      const orginalResult = unwrapResult(result);
      dispatch(setError(true));
      dispatch(setErrorMessage(orginalResult));
    } else {
      const result = await dispatch(signin({ formData, navigate }));
      const orginalResult = unwrapResult(result);
      dispatch(setError(true));
      dispatch(setErrorMessage(orginalResult));
    }
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch(auth({ result, token }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log('Google sign in was unsuccessful. try again later');
  };

  return (
    <div className='h-screen relative flex overflow-hidden '>
      <ErrorMessage />
      <img src={authImage} alt='authImage' className='hidden lg:block w-[35%] h-full' />
      <div className=' bg-white max-w-[650px] px-10  lg:px-0 lg:w-1/2 lg:max-w-[550px] flex flex-col items-center m-auto'>
        <h1 className='text-gray-500 font-bold text-xl'>ثبت نام خودکار</h1>
        <GoogleLogin
          clientId='832440333849-f7aqiau27g431umcnkldggupuhour253.apps.googleusercontent.com'
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className=' py-1.5 px-4 my-4 flex justify-center rounded-md bg-yellow-100 cursor-pointer '
            >
              <img
                src='https://img.icons8.com/color/25/000000/google-logo.png'
                alt='google-icon'
              />
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy='single_host_origin'
        />

        <span className='text-xs text-gray-500 w-full gap-2 flex justify-center items-center before:border-t before:w-1/3 after:border-t after:w-1/3'>
          ثبت نام با جیمیل
        </span>

        <form className='text-gray-800' onSubmit={handleSubmit}>
          {isSignUp ? (
            <div>
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

              <label htmlFor='email'>جیمیل</label>
              <input
                onChange={handleChange}
                placeholder='g@gmail.com'
                className='input mb-3 font-Roboto'
                required
                type='email'
                id='email'
                name='email'
              />
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
              <button className='w-full px-4 py-2 mt-10 bg-yellow-300 rounded-md font-bold transition-all duration-300 text-gray-800  hover:bg-yellow-400 hover:scale-105'>
                ثبت نام
              </button>
              <p className='text-xs mt-2'>
                اگر حساب دارید می توانید از این قسمت{' '}
                <span
                  onClick={handleSignup}
                  className='text-sky-500 mx-0.5 text-sm cursor-pointer'
                >
                  ورود
                </span>{' '}
                کنید
              </p>
            </div>
          ) : (
            <div>
              <label htmlFor='email'>جیمیل</label>
              <input
                onChange={handleChange}
                placeholder='g.gmail.com'
                className='input mb-3 font-Roboto'
                required
                type='text'
                id='email'
                name='email'
              />
              <label htmlFor='password'>رمز عبور</label>
              <input
                onChange={handleChange}
                placeholder='رمز عبور'
                className='input'
                required
                type='password'
                id='password'
                name='password'
              />
              <button className='w-full px-4 py-2 mt-10 bg-yellow-300 rounded-md font-bold transition-all duration-300 text-gray-800  hover:bg-yellow-400 hover:scale-105'>
                ورود
              </button>
              <p className='text-xs mt-2'>
                آیا حساب کاربری ندارید ؟{' '}
                <span
                  onClick={handleSignup}
                  className='text-purple-500 mx-0.5 text-sm cursor-pointer'
                >
                  {' '}
                  ثبت نام{' '}
                </span>
                کنید
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
