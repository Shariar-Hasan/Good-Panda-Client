import React from 'react';
import './Booking.css'
import {
    Link
} from "react-router-dom";


const Booking = () => {
    return (
        <div className="col-md-6 ml-auto py-5 mt-sm-5">
            <h1 className="mt-sm-5">Your Food Our Work</h1>
            <p className="text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, consequatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, inventore!</p>
            <Link to='/items'>
                <button className="siteButton">Order Now</button>
            </Link>
        </div>
    );
};

export default Booking;