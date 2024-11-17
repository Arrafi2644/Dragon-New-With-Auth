import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import LeftNavbar from '../../components/layoutComponents/LeftNavbar';
import RightNavbar from '../../components/layoutComponents/RightNavbar';
import { Outlet } from 'react-router-dom';
import Latest from '../../components/Latest'

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto font-poppins'>
           <header>
            <div>
            <Header></Header>
            <Latest></Latest>
            </div>
             
           </header>
           <nav className='my-6'>
            <Navbar></Navbar>
           </nav>
           <main className='my-6 grid md:grid-cols-12 gap-6'>
            {/* Left Nav */}
            <aside className='col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>

            {/* Main  */}
            <section className='col-span-6'>
                <Outlet></Outlet>
            </section>

            {/* Right Nav  */}
            <aside className='col-span-3'>
                <RightNavbar></RightNavbar>
            </aside>
           </main>
        </div>
    );
};

export default HomeLayout;