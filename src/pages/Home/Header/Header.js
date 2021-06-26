import React from 'react';
import './Header.css'
import Menubar from './../../Shared/Menubar/Menubar';
import Booking from './Booking/Booking'

const Header = () => {
    return (
        <div className="w-100 header ">
            <Menubar></Menubar>
            <div className="container">
                <Booking></Booking>
            </div>
        </div>

    );
};

export default Header;