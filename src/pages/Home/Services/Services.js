import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            title: "Online Restourent",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            icon: "utensils"
        },
        {
            title: "Home Delivary",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            icon: "shipping-fast"
        },
        {
            title: "Ceremony Management",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            icon: "tasks"
        }
    ]
    return (
        <div className='container py-5 mt-4'>
            <h3 className="text-center text-brand text-uppercase">Our Services</h3>
            <h6 className="text-center mb-5 lead">All the services we provides</h6>
            <div className="row  my-2">
                {
                    services.map((srv,i) => <ServiceCard key={i} service={srv}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;