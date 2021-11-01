import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '.././../../images/logo.png';
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="sticky-top">
            <nav className="shadow-sm p-3 bg-body rounded navbar navbar-expand-lg navbar-light bg-dark p-3">
                <div className="container">
                    <Link to="/"><img src={logo} alt="" className="logo-img" /></Link>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link menu-color" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-color" to="/destinations">Destinations</Link>
                                </li>

                                {user?.email &&
                                    <li className="nav-item">
                                        <Link className="nav-link menu-color" to="/orders">My Orders</Link>
                                    </li>

                                }
                                 {user?.email &&
                                   <li className="nav-item">
                                   <Link className="nav-link menu-color" to="/manageorders">Manage Order</Link>
                               </li>

                                }
                                
                                <li className="nav-item">
                                    <Link className="nav-link menu-color" to="/contactus">Contact us</Link>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link menu-color" to="/login">

                                        {
                                            user?.displayName 

                                        }
                                        
                                    </p>
                                </li>
                                <li className="nav-item">
                                    {
                                        user?.email ?
                                            <button onClick={logOut} className="btn btn-primary">Logout</button>
                                            :
                                            <Link className="nav-link menu-color" to="/login">Login</Link>
                                    }
                                </li>


                                {/* <li className="nav-item">
                                <Link className="nav-link menu-color" to="/"><FontAwesomeIcon icon={faSistrix} /></Link>
                            </li> */}
                                {/* {
                                !user.email || user.name ?


                                    <Link className="btn btn-dark mx-2" to="/register" role="button"> Register/Login </Link>







                                    :
                                    <div className="d-flex">
                                        <span className="nav-link menu-color">Hey, {user.displayName}</span>
                                        <button className="btn btn-dark" onClick={logout}>log out</button>
                                    </div>
                            } */}


                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;