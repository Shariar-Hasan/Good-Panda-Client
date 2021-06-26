import React, { useContext } from 'react';

import {
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';
const Menubar = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)

    const linkStyle = {
        color: "black",
        textDecoration: "none"
    }
    return (
        <div className="menubar w-100">
            <div className="container mx-auto row ">
                <div className="col-md-4 col-6">
                    <img src="https://i.ibb.co/5WSL7hQ/logo.png" alt="..." />
                </div>
                <nav className="navbar navbar-expand-lg navbar-light col-md-8 col-6">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto d-flex align-items-center">
                            <li className="nav-item">
                                <Link style={linkStyle} to="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} to="/dashboard">Dashboard</Link >
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} to="/items">Items</Link >
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} to="/contact">Contact</Link >
                            </li>
                            <li className="nav-item">
                                <Link style={linkStyle} to="/login">
                                    {
                                        (!Object.keys(loginUser).length)
                                            ?
                                            <button className="siteButton">Login</button>

                                            :
                                            <h4>{loginUser.name}</h4>
                                    }
                                </Link >
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Menubar;