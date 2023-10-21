import React from 'react';
import Heading from '../Components/Shared/Heading';
import Footer from '../Components/Shared/Footer';
import Search from '../Components/Shared/Search';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Heading></Heading>
            <Search></Search>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;