import React, { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignIn } from '../../../redux/Auth/userAuthSlice';
import { setError } from '../../../redux/errorSlice';

const SignIn = ({setIsSignUp}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //States
  const [formData, setFormData] = useState({
    nationalCode: '',
    password: '',
  });

  //Functions
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    dispatch(setError({ errorMessage: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(userSignIn({ formData, navigate }));
    const orginalResult = unwrapResult(result);
    if (!orginalResult.token) {
      dispatch(
        setError({errorMessage: orginalResult.message })
      );
    }
  };

  return (
    <div className=' bg-white max-w-[650px] px-10  lg:px-0 lg:w-1/2 lg:max-w-[550px] flex flex-col items-center m-auto'>

      <form className='text-gray-800' onSubmit={handleSubmit}>
        <div>
 
          <label htmlFor='nationalCode'>کد ملی</label>
          <input
            onChange={handleChange}
            placeholder='کد ملی'
            className='input mb-2 '
            required
            type='text'
            id='nationalCode'
            name='nationalCode'
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
            ورود 
          </button>
          <p className='text-xs mt-2'> اگر حساب ندارید می توانید از این قسمت
            <span
              onClick={() => setIsSignUp(true)}
              className='text-sky-500 mx-0.5 text-sm cursor-pointer'
            > ثبت نام </span> کنید
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
