import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../../components/ui/Loading';
import { updateEmployee } from '../../../redux/Auth/employeeAuthSlice';

const Card = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeAuth.employee);
  const loading = useSelector((state) => state.employeeAuth.loading);

  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    if (employeeData) {
      const inputs = document.querySelectorAll('input');
      inputs.forEach((items) => {
        if (employeeData.permissions.includes(items.name)) {
          items.checked = true;
        }
      });
      setPermissions(employeeData.permissions);

    }
  }, [employeeData]);

  const submitHandler = () => {
    if (employeeData) {
      dispatch(updateEmployee({id:employeeData._id, permissions}));
    }
  };


  return (
    <div
      className={`absolute z-30 overflow-hidden  bg-[rgba(0,0,0,0.4)]  w-full h-full right-0 top-0 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className='w-[350px] min-h-[450px] p-3 bg-white overflow-hidden font-Roboto z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-tl-xl'>
        <div className='absolute top-3 -left-3 w-16 h-1 bg-indigo-800 -rotate-45'></div>
        <img
          src='https://img.icons8.com/external-neu-royyan-wijaya/32/000000/external-cancel-neu-interface-neu-royyan-wijaya-3.png'
          alt='cancel'
          onClick={() => setShow(false)}
        />
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3 className='text-indigo-800 font-medium pt-2 px-8'>
              {employeeData && employeeData.firstName}
              {employeeData && employeeData.lastName}
            </h3>
            <ul className='px-8 font-yekan text-sm text-gray-500 space-y-4 mt-4'>
              <li className='flex justify-between'>
                <label htmlFor='c1'>فناوری اطلاعات</label>
                <input
                  id='c1'
                  name='فناوری اطلاعات'
                  type='checkbox'
                  value='فناوری اطلاعات'
                  className={`custom-checkbox`}
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c2'>امور برنامه ریزی</label>
                <input
                  id='c2'
                  name='امور برنامه ریزی'
                  type='checkbox'
                  value='امور برنامه ریزی'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c3'>امور مالی و شهریه</label>
                <input
                  id='c3'
                  name='امور مالی و شهریه'
                  type='checkbox'
                  value='امور مالی و شهریه'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c4'>امور اداری</label>
                <input
                  id='c4'
                  name='امور اداری'
                  type='checkbox'
                  value='امور اداری'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c5'>کتابخانه</label>
                <input
                  id='c5'
                  name='کتابخانه'
                  type='checkbox'
                  value='کتابخانه'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c6'>خدمات آموزشی</label>
                <input
                  id='c6'
                  name='خدمات آموزشی'
                  type='checkbox'
                  value='خدمات آموزشی'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                      console.log(permissions);
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c7'>حوزه ریاست</label>
                <input
                  id='c7'
                  name='حوزه ریاست'
                  type='checkbox'
                  value='حوزه ریاست'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
              <li className='flex justify-between'>
                <label htmlFor='c8'>درباره دانشگاه</label>
                <input
                  id='c8'
                  name='درباره دانشگاه'
                  type='checkbox'
                  value='درباره دانشگاه'
                  className='custom-checkbox  '
                  onClick={(e) => {
                    if (permissions.includes(e.target.value)) {
                      const newArray = [...permissions];
                      const index = newArray.indexOf(e.target.value);
                      if (index !== -1) {
                        newArray.splice(index, 1);
                        setPermissions(newArray);
                      }
                    } else {
                      setPermissions([...permissions, e.target.value]);
                    }
                  }}
                />
              </li>
            </ul>
            <div className=' flex justify-center'>
              <button
                className='font-yekan text-sm mt-5  bg-indigo-800 text-white px-5 py-1.5 rounded-md'
                onClick={submitHandler}
              >
                ذخیره
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

//onClick={() => dispatch(updateEmployee(employeeData._id,permissions))}
