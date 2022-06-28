import React, { useState } from 'react';

const CityList = ({ selected, setSelected, postData, setPostData }) => {
  const [active, setActive] = useState(false);
  const options = [
    'ارومیه',
    'نقده',
    'خوی',
    'مهاباد',
    'پیرانشهر',
    'بوکان',
    'میاندوآب',
    'ماکو',
    'شاهین دژ',
    'سردشت',
    'تکاب',
    'اشنویه',
    'شوط',
    'سلماس',
    'پلدشت',
    'تازه شهر',
    'قوشچی',
    'قره ضیاءالدین',
  ];

  return (
    <div className=' w-full'>
      <div
        className='flex cursor-pointer justify-between items-center w-full bg-gray-800 text-white px-4 py-2 rounded-md'
        onClick={() => setActive(!active)}
      >
        <p>{selected}</p>
        <img
          src='https://img.icons8.com/ios-glyphs/18/ffffff/expand-arrow--v1.png'
          alt='arrow'
        />
      </div>
      {active && (
        <div className='bg-gray-800 cursor-pointer h-52 overflow-y-scroll mt-3 rounded-md text-white'>
          {options.map((option) => (
            <div
              className='px-4 py-2 hover:bg-gray-600 '
              onClick={(e) => {
                setSelected(option);
                setActive(false);
                setPostData({ ...postData, educationCenter: e.target.textContent });
              }}
              key={option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityList;
