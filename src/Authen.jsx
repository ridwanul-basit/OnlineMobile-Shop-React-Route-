import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Authen = () => {
    return (
        <div className='bg-base-200'>
           <header className='w-11/12 py-3 mx-auto'>
           <Navbar></Navbar>
           </header>
           <main  className='w-11/12 mx-auto py-4'>
           <Outlet></Outlet>
           </main>

        </div>
    );
};

export default Authen;