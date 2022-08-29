import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  );
};

export default PermissionsList;
