import React from 'react';
import { useSelector } from 'react-redux';
import PN from 'persian-number';
import Logo from '../../images/jira-3.svg';



const Sidebar = () => {
   const users = useSelector((state) => state.fetch.users);
   const posts = useSelector((state) => state.fetch.posts);

  return (
    <div className='bg-gray-100 hidden font-yekan px-7 min-w-[230px] lg:block '>
      <div className=' text-egiht pt-6 '>
        <img src={Logo} alt='logo' className='w-8 h-8 inline' />
      </div>

      <div className='pt-7 text-gray-500 my-14'>
        <p className='text-xl text-black'>آمار</p>
        <ul className='mt-4'>
          <li className='list group'>
            <span className='group-hover:text-purple-500'>کاربران</span>
            <span className='static'>{PN.convertEnToPe(users.length)}</span>
          </li>
          <li className='list group my-1'>
            <span className='group-hover:text-purple-500'>درخواست ها</span>
            <span className='static'>{PN.convertEnToPe(posts.length)}</span>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-xl text-black'>راهنما</p>
        <ul className='mt-4 text-gray-500'>
          <li className=' list-style before:bg-red-500  '>پاسخ داده نشده</li>
          <li className=' my-2 list-style before:bg-green-500  '>
            پاسخ داده شده
          </li>
          <li className=' list-style before:bg-yellow-300  '>در حال بررسی</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar