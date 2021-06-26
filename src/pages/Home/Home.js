import React from 'react';
import Header from '../Home/Header/Header'
import Services from './Services/Services';
import CustomerReview from './CustomerReview/CustomerReview';
import TopFood from './TopFood/TopFood';
import Subscribe from './Subscribe/Subscribe';
import Footer from '../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <CustomerReview></CustomerReview>
            <TopFood></TopFood>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;