import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPosts } from '../../redux/cardSlice';
import { getUsersLength } from '../../redux/Auth/userAuthSlice';
import PN from 'persian-number';
import Logo from '../../images/jira-3.svg';



const Sidebar = () => {
  const dispatch = useDispatch()
   const usersLength = useSelector((state) => state.userAuth.usersLength);
   console.log(usersLength);
   const postsLength = useSelector((state) => state.fetch.posts).length;
  useEffect(() => {
    dispatch(getPosts())
    dispatch(getUsersLength())
  },[dispatch])

  return (
    <div className='bg-gray-100 hidden font-yekan px-7  lg:block '>
      <div className=' text-egiht pt-6 '>
        <img src={Logo} alt='logo' className='w-8 h-8 inline' />
      </div>
      <div className='pt-7 text-gray-500 my-6'>
        <p className='text-xl text-black'>آمار</p>
        <ul className='mt-2'>
          <li className='flex justify-between items-center w-full text-sm group'>
            <span className='group-hover:text-purple-500'>کاربران</span>
            <span className='static'>{PN.convertEnToPe(usersLength)}</span>
          </li>
          <li className='flex justify-between items-center w-full text-sm my-1 group'>
            <span className='group-hover:text-purple-500'>درخواست ها</span>
            <span className='static'>{PN.convertEnToPe(postsLength)}</span>
          </li>
        </ul>
      </div>

      <div>
        <p className='text-xl text-black'>راهنما</p>
        <ul className='mt-2 text-gray-500'>
          <li className=' list-style flex items-center before:bg-red-500 before:mt-1.5  '>
            پاسخ داده نشده
          </li>
          <li className=' my-1.5 list-style flex items-center before:bg-green-500 before:mt-1.5 '>
            پاسخ داده شده
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar