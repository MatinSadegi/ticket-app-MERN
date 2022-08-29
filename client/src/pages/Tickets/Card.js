import React, { useRef } from 'react';
import moment from 'moment';
import {gsap} from 'gsap'
import PN from 'persian-number';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const {subject, _id, ticketNumber, createdAt, ticketText, answered, tag} = item
  const boxRef = useRef();
  const onEnter = () => {
    gsap.to(boxRef.current, { width:"35px" , display:'flex' });
  }
  const onLeave = () => {
    gsap.to(boxRef.current, { width:"0px" , display:'none' });
  }
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className='flex mb-3 rounded-lg  odd:bg-gradient-to-tr odd:from-purple-100 odd:to-gray-50 even:bg-gradient-to-tr even:from-sky-100 even:to-gray-50'
    >
      <Link
        to={`/questions/${_id}`}
        ref={boxRef}
        className='w-0 hidden bg-indigo-200 rounded-r-lg flex-col gap-4 items-center justify-center cursor-pointer transition-colors  hover:bg-indigo-300 '
      >
        <p className='text-white text-xs mr-1 mt-4 -rotate-90 '>مشاهده</p>
        <img
          className=' -rotate-90'
          src='https://img.icons8.com/material-outlined/15/ffffff/visible--v1.png'
          alt='see'
        />
      </Link>
      <div className=' relative w-full font-yekan text-gray-500 p-7 '>
        <div className='flex justify-between'>
          <h1
            className={`text-black text-lg list-style ${
              answered ? 'before:bg-green-500' : 'before:bg-red-500'
            }`}
          >
            {subject}
          </h1>
          <p dir='ltr' className='text-sm font-Roboto'>
            {moment(createdAt).fromNow()}
          </p>
        </div>
        <p className='text-sm mt-2 mb-5'>{ticketText} </p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              className='w-7 h-7 rounded-full p-0.5  bg-sky-200'
              src='https://img.icons8.com/external-filled-outline-lima-studio/30/3498db/external-id-basic-user-interface-filled-outline-lima-studio-2.png'
              alt='outline'
            />
            <span className='text-xs mr-1'>
              کاربر {PN.convertEnToPe(ticketNumber)}
            </span>
          </div>
          <div className='flex items-center'>
            <img
              src='https://img.icons8.com/small/20/3498db/cancel-last-digit.png'
              alt='tag'
            />
            <p className='text-xs mb-1 mr-1'>{tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
