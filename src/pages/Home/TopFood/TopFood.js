import React, { useEffect, useState } from 'react';
import Foods from '../../Shared/Food/Foods';
import { Link } from 'react-router-dom';
import foodPic from './../../../images/food (1).jpg'




const TopFood = () => {
    const [foodItems, setFoodItems] = useState([])


    useEffect(() => {
        fetch('http://localhost:4965/getfood')
            .then(res => res.json())
            .then(result => {
                setFoodItems(result)
            })
    }, [])
    return (
        <div className='container py-5 my-4'>
            <h3 className="text-center text-brand text-uppercase">Our Top Foods</h3>
            <h6 className="text-center mb-5 lead">Some of the latest food items</h6>
            <div className="row">
                {
                    foodItems.slice(0, 6).map((food, i) => <Foods key={i} food={food}></Foods>)
                }
            </div>
            <div className=" my-4 text-center">
                <Link to='/items'>
                    <button className="siteButton see-more">See more</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFood;