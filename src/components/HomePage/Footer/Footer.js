import React from 'react';
import { Link } from 'react-router-dom';
import footerlogo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div style={{ backgroundColor: "#212529", height: "100%", overflow: "hidden", marginTop: "" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-2">
                            <img src={footerlogo} alt="" />
                            <hr style={{ color: "#395A7D", width: "50%" }} />


                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="row">
                                <div className="col-md-6 text-white">
                                    <h5>TOUR</h5>
                                  <div >
                                  <Link style={{textDecoration:"none", color:"white"}} to="/bangladesh"> <p>Bangladesh</p></Link>
                                    <Link  style={{textDecoration:"none", color:"white"}} to="/india"><p>India</p></Link>
                                    <Link  style={{textDecoration:"none", color:"white"}} to="/china"><p>China</p></Link>
                                  </div>
                                    <hr />
                                </div>
                                <div className="col-md-6 text-white">
                                    <h5>SUPPORT</h5>
                                    <p>Account</p>
                                    <p>Legal</p>
                                    <p>Contact</p>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                    <p style={{ color: "#395A7D", marginTop: "" }}>Copyright @ Ashiq Tourism LTD.</p>
                </div>

            </div>
        </div>
    );
};


export default Footer;