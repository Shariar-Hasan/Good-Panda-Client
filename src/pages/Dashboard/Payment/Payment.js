import React, { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import Menubar from '../../Shared/Menubar/Menubar';
import { Link } from 'react-router-dom';
import { CartContext, UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment';


const Payment = ({ handleLogin, useCart }) => {
    const [cart, setCart] = useContext(CartContext);
    const [loginUser, setLoginUser] = useContext(UserContext);
    return (
        <div>
            <div className="row w-100">
                <SideBar></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>
                    {
                        (Object.keys(cart).length)
                            ?
                            <div className="row">
                                <div className="col-md-8 mx-auto p-3">

                                    <div className="mx-auto w-75 p-5" >
                                        <h4 className="text-center text-brand my-2">Info</h4>
                                        <div className="form-group">
                                            <h6>Email :</h6>
                                            <input className="form-control p-3 my-3" disabled value={loginUser.email} />
                                        </div>
                                        <div className="form-group">
                                            <h6>Food :</h6>
                                            <input className="form-control p-3 my-3 " disabled value={cart.foodname}  />
                                        </div>
                                        <div className="form-group">
                                            <h6>Price :</h6>
                                            <input className="form-control p-3 my-3 " disabled value={`$${cart.price}`}  />
                                        </div>
                                        <div className="form-group">
                                            <h6>Card info :</h6>
                                            <ProcessPayment ></ProcessPayment>
                                        </div>
                                        <p className="text-center text-danger">{}</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="w-100 p-3">
                                <h2 className="text-center text-warning">Please First Select a Food from <Link to="/items">Items</Link></h2>
                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Payment;