import React from 'react';

const ReviewCard = ({reviews}) => {
    const {name, review, imgurl, rating} = reviews;
    
    console.log(reviews);
    return (
        <div className="col-md-4 mx-auto my-2">
            <div className="card service text-center p-4 rounded" >
                <img src={imgurl } style={{borderRadius: '50%', height: '80px', width:"80px",}} alt={name} className="mx-auto" />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">
                  {review}
                </p>
                <span className="text-brand">Rating : {rating}<i className="fa fa-star star" aria-hidden="true"></i></span>
              </div>
            </div>
        </div>
    );
};

export default ReviewCard;