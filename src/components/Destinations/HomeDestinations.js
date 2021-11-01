import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Destination from '../Destination/Destination';

const HomeDestinations = () => {
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
                        destinations.slice(0, 4).map(destinations => <Destination destination={destinations}></Destination>)
                    }
                    <div className="mt-4 mb-3" style={{ margin:'auto' }}>
                        <Link to="/destinations"><button className="btn btn-secondary">See More Destination</button></Link>
                    </div>




                </div>
            </div>
        </div>
    );
};


export default HomeDestinations;