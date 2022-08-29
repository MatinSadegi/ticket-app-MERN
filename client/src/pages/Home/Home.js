import React from 'react';
import {Outlet} from 'react-router-dom';
import Nav from '../../components/ui/Nav.js';
import Sidebar from '../../components/ui/Sidebar.js';



function Home() {


  return (
    <div className='max-w-screen font-yekan h-screen grid lg:grid-cols-[1fr_5fr] relative '>
      <Sidebar />
      <div>
        <Nav />
        <Outlet/>
      </div>
    </div>
  );
}

export default Home;