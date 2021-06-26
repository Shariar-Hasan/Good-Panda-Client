import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';

const Foods = ({ food }) => {
  const { foodname, imgurl, price, description, _id } = food;
  const [cart, setCart] = useContext(CartContext)

  const handleOrder = () => {
    const newCart = {
        foodname,
        price,
        id : _id,
    }
    setCart(newCart)
}

  return (
    <div className="col-md-4 my-3">
      <div className="card foodCard my-1 mw-100" >
        <div className="row no-gutter">
          <div className="col-md-5 mr-0 foodimg">
            <img src={imgurl} alt={foodname} className="card-img w-100" />
          </div>
          <div className="col-md-7 ml-0">
            <div className="card-body" >
              <h5 className="card-title">{foodname}</h5>
              <p className="card-text">{description}</p>
              <h6 className="card-subtitle mb-2 text-muted">Price: ${price}</h6>
            </div>
            <div className="mt-auto mb-1">
              <Link to={`/payment`}>
                <button onClick={handleOrder} className="siteButton">Order Now</button>

              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Foods;