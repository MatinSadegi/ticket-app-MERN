import React from 'react'
import Nav from '../../components/ui/Nav';
import { Outlet } from 'react-router-dom';
import AdminSide from './AdminSide';

const Admin = () => {
  return (
    <div className='max-w-screen font-yekan h-screen grid lg:grid-cols-[1fr_5fr] '>
        <AdminSide/>
      <div>
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin