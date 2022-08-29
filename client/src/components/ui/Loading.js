import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  const el = useRef();
  const q = gsap.utils.selector(el)
  useEffect(() => {
    gsap.to(q(".span-1"), {
      duration: 0.6,
      y:"-15",
      ease: 'bonuce',
      repeat: Infinity,
      yoyo:true
    });
    gsap.to(q('.span-2'), {
      duration: 0.6,
      y: '-15',
      delay: 0.2,
      ease: 'bonuce',
      repeat: Infinity,
      yoyo: true
    });
    gsap.to(q('.span-3'), {
      duration: 0.6,
      y: '-15',
      delay: 0.4,
      ease: 'bonuce',
      repeat: Infinity,
      yoyo: true
    });
  });
  return (
    <div className='flex justify-center items-center mt-40' ref={el}>
      <span  className='loadingCircle bg-purple-400 span-1'></span>
      <span  className='loadingCircle bg-sky-400 span-2 '></span>
      <span  className='loadingCircle bg-purple-400 span-3 '></span>
    </div>
  );
};

export default Loading;
