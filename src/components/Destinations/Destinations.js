import React, { useState, useEffect } from 'react';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch(`https://scary-werewolf-45600.herokuapp.com/destinations`)
            .then(res => res.json())
            .then(data => setDestinations(data))

    }, [])
    return (
        <div className="mt-5">
        <div className="container mb-5 text-center">
            <h3 className=" ">Popular Destination</h3>
            <p>these location are best location for beautiful tour!</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 ">
                {
                    destinations.map(destinations => <Destination destination={destinations}></Destination>)
                }



            </div>
        </div>
    </div>
);
};

export default Destinations;