import React, { useEffect, useState } from 'react';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';
import { Link } from 'react-router-dom';
const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4965/getreview')
            .then(res => res.json())
            .then(result => {
                setReviews(result)
            })
    }, [])

    return (
        <div className="w-100 bg-gray">
            <div className='container py-5 my-4'>
                <h3 className="text-center text-brand text-uppercase">Customer Review</h3>
                <h6 className="text-center mb-5 lead">Some of our Customers Review</h6>
                <div className="row">
                    {
                        reviews.map((r, i) => <ReviewCard key={i} reviews={r}></ReviewCard>)
                    }
                </div>
                <div className=" my-4 text-center">
                    <Link to='/reviews'>
                        <button className="siteButton see-more">See more</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default CustomerReview;