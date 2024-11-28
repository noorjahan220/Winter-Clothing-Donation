import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div>
                <Outlet />
            </div>
            <footer>
                <Footer/>
            </footer>


        </>
    );
};

export default MainLayout;