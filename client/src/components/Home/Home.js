import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {Outlet} from 'react-router-dom';

import {getPosts} from '../../redux/cardSlice';

import Nav from './Nav.js';
import Sidebar from './Sidebar.js';



function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div className='max-w-screen font-yekan h-screen grid lg:grid-cols-[1fr_5fr] '>
      <Sidebar />
      <div>
        <Nav />
        <Outlet/>
      </div>
    </div>
  );
}

export default Home;