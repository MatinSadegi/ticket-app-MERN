import React from 'react';

const Employee = ({firstName, lastName, nationalCode, id}) => {
  
  return (
    <div
      dir='ltr'
      className=' grid grid-cols-10 bg-gray-100 text-left even:bg-white font-Roboto text-sm '
    >
      <p className='col-span-3  py-3 pl-3'>{id}</p>
      <p className='col-span-2 border-l py-3 pl-3'>{firstName}</p>
      <p className='col-span-2 border-l py-3 pl-3'>{lastName}</p>
      <p className='col-span-3 border-l py-3 pl-3'>{nationalCode}</p>
    </div>
  );
}

export default Employee 