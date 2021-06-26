import React, { useContext, useEffect, useState } from 'react';
import './OrderList.css'
import SideBar from '../SideBar/SideBar';
import Menubar from '../../Shared/Menubar/Menubar'
import { AdminContext, UserContext } from '../../../App';


const OrderList = ({ handleLogin }) => {
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [order, setOrder] = useState([])

    const loadAllOrder = () => {
        fetch(`http://localhost:4965/getorder/${loginUser.email}`)
            .then(res => res.json())
            .then(result => setOrder(result))

    }

    const handleChange = (od, e) => {
        od.status = e.target.value;
        fetch(`http://localhost:4965/updateStatus/${od._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(od)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadAllOrder()
                }
            })
    }

    loadAllOrder()


    return (
        <div>
            <div className="row w-100">
                <SideBar handleLogin={handleLogin}></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>
                    <div className="row p-4">
                        <div className="table-responsive ">
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Food</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Pay with</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        order?.map((od, i) => <tr key={i}>
                                            <td>{od.name || "..loading"}</td>
                                            <td>{od.email || "..loading"}</td>
                                            <td>{od.order.foodname || "..loading"}</td>
                                            <td>{od.order.price || "..loading"}</td>
                                            <td>{`${od.paymentInfo.brand} ${od.paymentInfo.type}` || "..loading"}</td>
                                            <td className="text-danger">
                                                {
                                                    isAdmin
                                                        ?
                                                        <select onChange={(e) => handleChange(od, e)} defaultValue={od.status} className={`custom-select ${od.status}`} id="list" style={{ border: "none" }}>
                                                            <option value="pending">Pending</option>
                                                            <option value="ongoing">On Going</option>
                                                            <option value="done">Done</option>
                                                        </select>
                                                        :
                                                        <span className={od.status}>{od.status}</span>
                                                }
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;