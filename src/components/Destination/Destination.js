import React from 'react';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    const { _id, img, name, location, ratings, price } = props.destination;
    return (
        <div className="col">
        <div className="card h-100  p-1 mb-5 bg-body rounded border-0">
            <img src={img} className="card-img-top rounded" alt="..." height="100%" />
            <div className="card-body">
                <h5 style={{alignItems:'left'}} className="card-title">{name}</h5>
                <small style={{ color: 'blue', marginBottom: '10px' }}>{location}</small><br />
                <small>rating: {ratings}</small>
               
                <p>price: ${price}</p> 

                <Link className="btn mt-1 btn-dark" to={`/booking/${_id}`} role="button">Book {name}</Link>
            </div>







        </div>
    </div>
    );
};

export default Destination;