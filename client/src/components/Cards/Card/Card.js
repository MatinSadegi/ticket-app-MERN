import React from 'react';
import moment from 'moment';
import PN from 'persian-number';

const Card = ({ item }) => {

  const sliceNumber = String(item.studentNumber).slice(6);
  const ticketNumber = Number(sliceNumber);

  return (
    <div className=' m-auto rounded-lg font-yekan text-gray-500 p-7 odd:bg-gradient-to-tr odd:from-purple-100 odd:to-gray-50 even:bg-gradient-to-tr even:from-sky-100 even:to-gray-50 mb-3'>
      <div className='flex justify-between'>
        <h1 className='text-black text-lg list-style before:bg-yellow-300'>
          {item.title}
        </h1>
        <p dir='ltr' className='text-md '>
          {moment(item.createdAt).fromNow()}
        </p>
      </div>
      <p className='text-sm mt-2 mb-5'>{item.message} </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img
            className='w-7 h-7 rounded-full p-0.5  bg-sky-200'
            src='https://img.icons8.com/external-filled-outline-lima-studio/30/3498db/external-id-basic-user-interface-filled-outline-lima-studio-2.png'
            alt='outline'
          />
          <span className='text-xs mr-1'>تیکت {PN.convertEnToPe(ticketNumber)}</span>
        </div>
        <div className='flex items-center'>
          <img src='https://img.icons8.com/small/20/3498db/cancel-last-digit.png' alt='tag' />
          <p className='text-xs mb-1 mr-1'>{item.field}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
