import { faPeriscope } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faRssSquare, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactUs = () => {
    return (
        <div className="mb-5">
            <h3 className="text-center mt-3 mb-4">Contact US</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 shadow rounded mb-2">
                        <h4 className="mb-3 mt-3 text-center"> Get in Touch</h4>
                        <form className="container">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Name" aria-label="First name" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Last name" />
                                </div>
                                <br />
                                <div class="col-12">
                                    <input type="text" class="form-control mt-3 mb-3" placeholder="Subject" aria-label="Last name" />
                                </div>
                                <div>
                                <textarea name="" id="" cols="30" rows="10" className="form-control mt-3 mb-3" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-primary mb-4 mt-2"> Send Message </button>
                                </div>

                            </div>

                        </form>
                    </div>
                    <div style={{backgroundColor:"#3D89F8"}} className="col-md-4 text-white">
                    <h4 className="mb-3 mt-3 text-center"> contact us</h4>
                        <div className="continer mx-5 mt-5">
                            <div><p><FontAwesomeIcon icon={faPeriscope}/> <b> Address: </b> 398,sultanpur,brahmanbaria</p></div>
                            <div><p><FontAwesomeIcon icon={faPhoneAlt}/> <b> Phone: </b> +8801790173857</p></div>
                            <div><p><FontAwesomeIcon icon={faSave}/> <b>Email: </b> raselahmed4star@gmail.com</p></div>
                            <div><p><FontAwesomeIcon icon={faRssSquare}/> <b>website: </b> raselahmed.com</p></div>
                        </div>
                            
                        </div>

                    </div>
                </div>
            
        </div>
    );
};

export default ContactUs;