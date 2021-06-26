import React, { useEffect, useState } from 'react';
import Food from './../Shared/Food/Foods';
import MenuBar from './../Shared/Menubar/Menubar';
import Footer from './../Shared/Footer/Footer'


const Items = () => {
    const [foodItems, setFoodItems] = useState([])


    useEffect(() => {
        fetch('http://localhost:4965/getfood')
            .then(res => res.json())
            .then(result => {
                setFoodItems(result)
            })
    }, [])
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <h2 className="display-3 mb-4 text-center"> All Food Items</h2>
            <div className="row">
                {
                    foodItems.map((fd, i) => <Food key={i} food={fd}></Food>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Items;