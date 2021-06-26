import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext, CartContext } from '../../../App';
const SideBar = ({ handleLogin }) => {
    const linkStyle = {
        color: "black",
        textDecoration: "none",
        border: "1px solid black",
        padding: "4px 5px"
    } 
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    return (
        <div className="col-2  sidebar bg-gray p-5">
            <div className="nav-bar">
                <ul className="text-left">
                    <li>
                        <img src="https://i.ibb.co/5WSL7hQ/logo.png" alt="logo" />
                    </li>
                    <li>
                        <Link style={linkStyle} to={`/orderlist`}>
                            <i className="fa fa-list" aria-hidden="true"></i> Order List
                        </Link>
                    </li>
                    {
                        (isAdmin)
                            ?
                            <span>
                                <li>
                                    <Link  style={linkStyle} to={`/addAdmin`}>
                                        <i className="fa fa-plus" aria-hidden="true"></i> Make Admin
                                    </Link>
                                </li>
                                <li>
                                    <Link  style={linkStyle} to={`/addFood`}>
                                       <i className="fa fa-plus-square" aria-hidden="true"></i> Add Food
                                    </Link>
                                </li>
                            </span>
                            :
                            <span>
                                <li>
                                    <Link  style={linkStyle} to={`/payment`}>
                                        <i className="fab fa-paypal" aria-hidden="true"></i> Payment section
                                    </Link>
                                </li>
                                <li>
                                    <Link  style={linkStyle} to={`/review`}>
                                        <i className="fa fa-star" aria-hidden="true"></i> Review
                                    </Link>
                                </li>
                            </span>
                    }


                </ul>
            </div>
        </div>
    );
};

export default SideBar;