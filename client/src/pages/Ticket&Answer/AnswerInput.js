import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAnswer } from '../../redux/Post/answerSlice';

const AnswerInput = ({ id, post }) => {
  //useDispatch
  const dispatch = useDispatch();
  //useState
  const [answer, setAnswer] = useState('');
  //useSelector
  const currentEmployee = useSelector((state) => state.employeeAuth.employees);
  //Functions
  const handleAnswer = () => {
    dispatch(createAnswer({ id, answer }));
  };

  return (
    <div className='w-full'>
      {post &&
      currentEmployee &&
      currentEmployee.employee.permissions.includes(post.tag) ? (
        <div className='mt-6 relative'>
          <textarea
            id='ticket'
            name='ticket'
            placeholder='پاسخ خود را بنویسید ...'
            onChange={(e) => setAnswer(e.target.value)}
            className='rounded-md bg-gray-100 p-2 w-full h-[100px] text-sm resize-none outline-none placeholder:text-gray-400 placeholder:text-xs '
          />
          <button
            onClick={handleAnswer}
            className=' text-xs text-white py-1.5 px-4 absolute left-2 bottom-4 bg-gray-900 rounded-md'
          >
            ارسال
          </button>
        </div>
      ) : (
        <p className='mt-6 w-full  py-3 bg-red-100 text-center rounded-md text-red-600'>
          شما مجوز پاسخ به این تیکت را ندارید ..!
        </p>
      )}
    </div>
  );
};

export default AnswerInput;
