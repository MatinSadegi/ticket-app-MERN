import React from 'react';

const Student = ({ firstName, lastName, nationalCode, studentNumber, id }) => {
  return (
    <div
      dir='ltr'
      className=' grid grid-cols-10 md:grid-cols-9 bg-gray-100 text-left even:bg-white font-Roboto text-sm '
    >
      <p className='col-span-3 py-3 pl-3 hidden md:block'>{id}</p>
      <p className='col-span-3 md:col-span-1 md:border-l py-3 pl-3'>{firstName}</p>
      <p className='col-span-3 md:col-span-1 border-l py-3 pl-3'>{lastName}</p>
      <p className='col-span-4 md:col-span-2 border-l py-3 pl-3'>{nationalCode}</p>
      <p className='col-span-2 border-l py-3 pl-3 hidden md:block'>{studentNumber}</p>
    </div>
  );
};

export default Student;
