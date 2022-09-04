import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEmployees } from '../../../redux/Auth/employeeAuthSlice';
import Permissions from './Permissions';
import Card from './Card';

const PermissionsList = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const employeesData = useSelector(
      (state) => state.employeeAuth.employeeData
    );
    useEffect(() => {
      dispatch(getEmployees());
    }, [dispatch,show]);

  return (
    <>
      <div className='h-14 bg-indigo-500 grid grid-cols-3 text-white text-sm lg:hidden'>
        <Link
          to='/admin'
          className='flex flex-col items-center justify-center cursor-pointer '
        >
          <p>اساتید</p>
          <img
            src='https://img.icons8.com/material-rounded/24/ffffff/knowledge-sharing.png'
            alt='knowledge-sharing-icon'
          />
        </Link>
        <Link
          to='/admin/students'
          className='flex flex-col items-center justify-center cursor-pointer'
        >
          <p>دانشجویان</p>
          <img
            src='https://img.icons8.com/external-those-icons-fill-those-icons/19/ffffff/external-Student-school-and-education-those-icons-fill-those-icons-4.png'
            alt='student-icon'
          />
        </Link>
        <Link
          to='/admin/permissions'
          className='flex flex-col items-center justify-center cursor-pointer bg-indigo-800'
        >
          <p> مجوز ها</p>
          <img
            src='https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/20/ffffff/external-key-user-tanah-basah-glyph-tanah-basah.png'
            alt='permissions-icon'
          />
        </Link>
      </div>
      <div className='w-full px-8 py-4 '>
        <h1 className='font-bold text-2xl'>مجوز ها</h1>
        <div className='w-full font-Roboto text-sm font-medium mt-8'>
          {employeesData.map((employee) => (
            <Permissions
              key={employee._id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              permissions={employee.permissions}
              id={employee._id}
              setShow={setShow}
            />
          ))}
        </div>
        <Card show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default PermissionsList;
