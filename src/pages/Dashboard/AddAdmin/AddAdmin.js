import React from 'react';
import SideBar from '../SideBar/SideBar';
import Menubar from '../../Shared/Menubar/Menubar'

import { useForm } from "react-hook-form";

const AddAdmin = ({ handleLogin }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:4965/addadmin',{
            method : "POST",
            headers:{
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    };
    return (
        <div>
            <div className="row w-100">
                <SideBar handleLogin={handleLogin}></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>

                    <div className="col-9 mx-auto bg-gray p-5 mt-5 rounded shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <input className="form-control col-9" placeholder="Enter Admins Email" required {...register("email")} />

                                <input className="btn btn-block btn-dark col-3" value="Add Admin" type="submit" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAdmin;