import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';

export const ErrorMessage = ({ authError }) => {
  const err = useSelector((state) => state.error)
  console.log(err)
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { x: 30, opacity: 1, yoyo: true });
    gsap.to(boxRef.current, { x: -150, opacity: 0, yoyo: true, delay: 2 });
  }, [authError, err]);

  return (
    <>
      {err.errorMessage && (
        <div
          ref={boxRef}
          className='px-8 py-3 bg-red-500 text-white  flex items-center rounded-md  opacity-30 absolute z-20 -translate-x-16 left-0 bottom-5'
        >
          <p className='ml-2'>{err.errorMessage}</p>
          <img
            src='https://img.icons8.com/office/20/000000/high-priority.png'
            alt='error'
          />
        </div>
      )}
    </>
  );
};
