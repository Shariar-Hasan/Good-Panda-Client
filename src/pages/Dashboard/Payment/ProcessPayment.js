import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51J6YCtJrY1S17lA5601KTHz28S9woWhugj8Bnyp9Ch8RTLglOfIWkk2Bdv71fpzzhO4PgfzQpNyA3u6FMJKYELtl00roA8xlse');
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;