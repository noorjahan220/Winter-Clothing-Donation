import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
        <Toaster/>
            <header>
                <Navbar/>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <Footer/>
            </footer>


        </div>
    );
};

export default MainLayout;