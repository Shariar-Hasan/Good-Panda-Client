import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Menubar from '../../Shared/Menubar/Menubar'
import { useForm } from "react-hook-form";
const axios = require('axios')


const AddFood = ({ handleLogin }) => {
    const { register, handleSubmit } = useForm();
    const [imgurl, setimgurl] = useState(null)
    const handleimage = (e) => {

        const imgData = new FormData()
        imgData.set("key", "9afbea5a88c03862181bd5c271510f6c")
        imgData.set("image", e.target.files[0])
        axios.post("https://api.imgbb.com/1/upload", imgData)
            .then(res => {
                setimgurl(res.data.data.display_url);
                console.log(res.data.data.display_url);
            })
            .catch(err => console.log(err))
    }
    const onSubmit = (data, e) => {
        const foodData = {
            foodname: data.foodname,
            price: data.price,
            description: data.description,
            imgurl: imgurl
        }
        fetch("http://localhost:4965/addfood", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
        e.target.reset()
        setimgurl(null)
    };
    return (
        <div>
            <div className="row w-100">
                <SideBar handleLogin={handleLogin}></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>
                    <div className="col-9 mx-auto bg-gray p-5 mt-5 rounded shadow-lg">
                        <h4 className="text-center">Add Food</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <input type="text" className="form-control col-6 my-1" placeholder="Food Name" required {...register("foodname")} />

                                <textarea style={{ resize: 'none' }} className="form-control col-6 my-1" placeholder="Description" required {...register("description")} />

                                <br />

                                <input type="number" className="form-control col-6 my-1" placeholder="$ Price" required {...register("price")} />

                                <input type="file" onChange={handleimage} accept="image/*" className="form-control-file col-6 my-1" required />

                                <button className="btn btn-block btn-dark ml-auto my-1 py-2" disabled={imgurl !== null ? false : true} type="submit" >{imgurl !== null ? "Add Food" : <span><i className="fas fa-spinner fa-pulse"></i> ...Wait </span>}</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;