import React from 'react';

import HomeDestinations from '../Destinations/HomeDestinations';
import Banner from '../HomePage/Banner/Banner';
// import Navbar from '../HomePage/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeDestinations></HomeDestinations>
        </div>
    );
};

export default Home;