import React from 'react'
import { Link } from 'react-router-dom';

const AdminSide = () => {
    return (
      <div className='bg-indigo-900 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white p-6 hidden font-yekan lg:block '>
        <div className='flex justify-between items-center mb-8'>
          <h2>ادمین</h2>
          <img
            src='https://img.icons8.com/external-creatype-outline-colourcreatype/30/ffffff/external-dashboard-basic-creatype-outline-colourcreatype.png'
            alt='dashboard-icon'
          />
        </div>
        <Link to='/admin' className='flex items-center cursor-pointer'>
          <img
            src='https://img.icons8.com/material-rounded/20/ffffff/knowledge-sharing.png'
            alt='knowledge-sharing-icon'
          />
          <p className='text-xs mr-4'>اساتید</p>
        </Link>
        <Link to='/admin/students' className='my-4 flex items-center cursor-pointer'>
          <img
            src='https://img.icons8.com/external-those-icons-fill-those-icons/19/ffffff/external-Student-school-and-education-those-icons-fill-those-icons-4.png'
            alt='student-icon'
          />
          <p className='text-xs mr-4'>دانشجویان</p>
        </Link>
        <Link to='/admin/permissions' className='flex items-center cursor-pointer'>
          <img src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/ffffff/external-key-user-tanah-basah-glyph-tanah-basah.png' alt='permissions-icon' />
          <p className='text-xs mr-4'> مجوز ها</p>
        </Link>
        <div>
          <p></p>
        </div>
      </div>
    );
}

export default AdminSide