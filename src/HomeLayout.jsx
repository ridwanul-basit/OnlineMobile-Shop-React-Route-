import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Latest from './Latest';
import Navbar from './Navbar';
import LeftAside from './homeLayOut/LeftAside';
import RightAside from './homeLayOut/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3 '>
            <Latest></Latest>
            </section>
            <nav className='w-11/12 mx-auto my-3 '>
                <Navbar></Navbar>
            </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
            <aside className='col-span-3 mr-5 sticky top-0 h-fit'>
                <LeftAside></LeftAside>
            </aside>
                 <section className="col-span-6 mr-5">
                    <Outlet></Outlet>
                 </section>
                 <aside className='col-span-3 mr-5 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                 </aside>
            </main>
            
                 
        </div>
    );
};

export default HomeLayout;