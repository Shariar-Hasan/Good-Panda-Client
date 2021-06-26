import React from 'react';
const Subscribe = () => {
    return (
        <div className='container py-5 my-4'>
                <h3 className="text-center text-brand text-uppercase">Subcribe</h3>
                <h6 className="text-center mb-5 lead">Subscribe to our site to get latest update about new food</h6>
            <div className="row my-5">
                <div className="col-md-8 mx-auto p-5 d-flex bg-gray  rounded">
                    <input type="text" className="col-md-9 form-control" placeholder="Subscribe by Email"/>
                    <input type="submit" className="col-md-3 btn btn-block btn-dark" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;