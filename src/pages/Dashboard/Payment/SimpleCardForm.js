import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext, MsgContext, UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';


const SimpleCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errormsg, setErrormsg] = useContext(MsgContext)
    const [cart, setCart] = useContext(CartContext)
    const [loginUser, setLoginUser] = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrormsg(error.message)
            setTimeout(() => {
                setErrormsg('')
            }, 3000)
        } else {
            const newOrder = {
                name : loginUser.name,
                email: loginUser.email,
                order: cart,
                paymentInfo: {
                    brand: paymentMethod.card.brand,
                    type: paymentMethod.type
                },
                status : "pending"
            }
            setCart({})
            fetch("http://localhost:4965/addorder", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newOrder)
            })
                .then(res => res.json())
                .then(result => console.log(result))
            history.push('/orderlist')

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="form-control p-3 my-3 "
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="siteButton btn-block" type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default SimpleCardForm;