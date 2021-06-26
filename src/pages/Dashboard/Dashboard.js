import React, { useContext } from 'react';
import SideBar from './SideBar/SideBar';
import Menubar from './../Shared/Menubar/Menubar'
import { AdminContext, UserContext } from '../../App';


const Dashboard = ({ handleLogin }) => {
    const [loginUser,setLoginUser] = useContext(UserContext)
    const [isAdmin,setIsAdmin] = useContext(AdminContext)
    return (
        <div>
            <div className="row w-100">
                <SideBar handleLogin={handleLogin}></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>
                   <h1 className="display-4 text-center"> welcome to dashboard,{isAdmin && "Admin: "} {loginUser.name}</h1>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;