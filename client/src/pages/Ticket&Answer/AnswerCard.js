import React from 'react';
import moment from 'moment';

const AnswerCard = ({ answerMessage, createdAt }) => {
  return (
    <div className='w-full'>
      <div className='bg-green-100 flex flex-col justify-between mt-2 p-4 pb-2 pl-2 min-h-[110px] rounded-sm'>
        <div>
          <p className='text-xs text-gray-500'>پاسخ :</p>
          <p className=' text-sm text-gray-700 mt-1'>{answerMessage}</p>
        </div>
        <p className='font-Roboto text-[10px] text-gray-400 text-left'>
          {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </p>
      </div>
    </div>
  );
};

export default AnswerCard;
