import React from 'react';
import { Link } from 'react-router-dom';
import bannerbg from '../../../images/banner.jpg';
import './Banner.css'

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${bannerbg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    //     // backgroundRepeat: 'no-repeat',
        // width: '100%',
        // height: '100%',

    }
    
    return (
        <div style={bannerStyle}>
            
        <div className="container-fluid">
            <div className="row background-color">
                <div className="col-md-12 text-center text-white" style={{margin:'200px 0px'}}>
                 
                  <h1 style={{fontWeight:'700',fontSize:'50px' }}>Find Your Perfact Destination</h1>
                   <p>Get the best prices on 20,000+ properties</p>
                  <Link to="/destinations"> <button type="button" class="btn btn-secondary">EXPLORE NOW!</button> </Link>

                 

                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;