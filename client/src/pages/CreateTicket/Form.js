import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPosts } from '../../redux/cardSlice';
import {useNavigate } from 'react-router-dom';
const Form = () => {
  const studentNumber = JSON.parse(localStorage.getItem('userProfile')).existingUser.studentNumber
  const sliceStudentNumber = studentNumber.toString().slice(5);
  const [ticket, setTicket] = useState({
    tag:"فناوری اطلاعات",
    subject:"",
    ticketText:"",
    ticketNumber:parseInt(sliceStudentNumber),
    answered:false
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPosts(ticket));
    navigate('/questions')
  }; 

  return (
    <form
      onSubmit={submitHandler}
      className='max-w-[80%] m-auto h-screen py-10'
    >
      <h3 className='text-sm'>
        جهت پاسخگویی بهتر , بخش مربوط به موضوع تیکت را از بین تگ ها انتخاب کنید
      </h3>
      <div className='flex items-center gap-5 mt-2 flex-wrap'>
        <input
          type='radio'
          id='r1'
          name='تگ'
          value='کتابخانه'
          className='custom-radio before:content-["کتابخانه"]'
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r2'
          name='تگ'
          value='امور اداری'
          className='custom-radio before:content-["امور_اداری"] '
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r3'
          name='تگ'
          value='فناوری اطلاعات'
          defaultChecked
          className='custom-radio before:content-["فناوری_اطلاعات"] '
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r4'
          name='تگ'
          value='امور برنامه ریزی'
          className='custom-radio before:content-["امور_برنامه_ریزی"] '
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r5'
          name='تگ'
          value='امور مالی و شهریه'
          className='custom-radio  before:content-["امور_مالی_و_شهریه"]'
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r6'
          name='تگ'
          value='خدمات آموزشی'
          className='custom-radio  before:content-["خدمات_آموزشی"]'
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r7'
          name='تگ'
          value='حوزه ریاست'
          className='custom-radio  before:content-["حوزه_ریاست"]'
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
        <input
          type='radio'
          id='r8'
          name='تگ'
          value='درباره دانشگاه'
          className='custom-radio  before:content-["درباره_دانشگاه"]'
          onClick={(e) => setTicket({ ...ticket, tag: e.target.value })}
        />
      </div>
      <div className='border-t mt-6 pt-6'>
        <input
          type='text'
          placeholder='موضوع'
          className='border-2 block border-indigo-700 p-2 text-sm rounded-md placeholder:text-indigo-700'
          onChange={(e) => setTicket({ ...ticket, subject: e.target.value })}
        />
        <textarea
          id='ticket'
          name='ticket'
          placeholder='متن تیکت خود را بنویسید ...'
          className='border-2 rounded-md border-indigo-600 placeholder:text-indigo-600 mt-6 p-2 w-1/2 h-40 text-sm resize-none'
          onChange={(e) => setTicket({ ...ticket, ticketText: e.target.value })}
        />
      </div>
      <button
        type='submit'
        className=' button-style after:bg-indigo-600 before:bg-indigo-800 mt-3'
      >
        ارسال
      </button>
    </form>
  );
};

export default Form;
