import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="w-100 footer bg-gray ">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <i className="fas fa-map-marker-alt"></i>
                        <br />
                        <span className="text-muted">#334, B/A Bashundhora, Giripoth Koloni, Dhaka</span>
                        <br />
                        <span className="text-muted">Head Office: Bashundhara Housing Society, Dhaka</span>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 className="text-uppercase">Company</h5>
                                <ul>
                                    <li>About</li>
                                    <li>Our Address</li>
                                    <li>Contact</li>
                                    <li>Staff Application</li>
                                    <li>Delivary Man Registration</li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h5 className="text-uppercase">Quick Links</h5>
                                <ul>
                                    <li>Sales</li>
                                    <li>Rentals</li>
                                    <li>Past Records</li>
                                    <li>Consaltation</li>
                                    <li>Our Blogs</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h5 className="text-uppercase">About Us</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore unde molestias ad quidem aliquid reprehenderit velit modi excepturi laborum! Cumque?</p>
                                <ul className="social-menu">
                                    <li><i className="fab fa-facebook" aria-hidden="true"></i></li>
                                    <li><i className="fab fa-instagram" aria-hidden="true"></i></li>
                                    <li><i className="fab fa-whatsapp" aria-hidden="true"></i></li>
                                    <li><i className="fab fa-twitter" aria-hidden="true"></i></li>
                                    <li><i className="fab fa-youtube" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<p className="text-center">&copy; Copyright {(new Date()).getFullYear()} || Good Panda</p>
        </div>
    );
};

export default Footer;