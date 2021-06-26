import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import Menubar from '../../Shared/Menubar/Menubar'
import { useForm } from "react-hook-form";
import { AdminContext, UserContext } from '../../../App';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';

const Review = ({ handleLogin }) => {
    const { register, handleSubmit } = useForm();
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const [ratingChange, setRatingChange] = useState(5)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4965/getreview')
            .then(res => res.json())
            .then(result => {
                setReviews(result)
            })
    }, [])

    const onSubmit = (data, e) => {

        const review = {
            name: loginUser.name,
            review: data.review,
            imgurl: loginUser.photo,
            rating: ratingChange
        }
        fetch("http://localhost:4965/addreview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
        e.target.reset()
    };
    return (
        <div>
            <div className="row w-100">
                <SideBar handleLogin={handleLogin}></SideBar>
                <div className="col-10 m-0">
                    <Menubar></Menubar>
                    <div className="col-9 mx-auto bg-gray p-5 mt-5 rounded shadow-lg">
                        <h4 className="text-center">Review Section</h4>
                        {
                            isAdmin || <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">

                                    <textarea style={{ resize: 'none', height: "100px" }} className="form-control col-12 my-1" placeholder="Write something about our food" required {...register("review")} />
                                    <br />
                                    <label htmlFor="rating">Giving {ratingChange}<i className="fa fa-star star" aria-hidden="true"></i> Stars</label>
                                    <input id="rating" type="range" min="1" max="5" step="1" onChange={e => setRatingChange(e.target.value)} className="form-control-file col-12 my-3" required />

                                    <button className="btn btn-block btn-dark ml-auto my-1 py-2" type="submit" >Submit Review</button>
                                </div>

                            </form>
                        }

                    </div>
                    <div className="col-9 mx-auto bg-gray p-5 mt-5 rounded shadow-lg">
                        <div className="row">
                            {
                                reviews.map((r, i) => <ReviewCard key={i} reviews={r}></ReviewCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;