import React from 'react';

const Serviceard = ({ service }) => {
    const { title, description, icon } = service;
    return (
        <div className='col-md-4 mx-auto text-center'>
            <div className="card  rounded-circle  border-0 service p-4" style={{height:"300px"}}>
                <div className="card-img-top text-center">
                    <i className={`fa icon fa-${icon}`} aria-hidden="true"></i>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Serviceard;