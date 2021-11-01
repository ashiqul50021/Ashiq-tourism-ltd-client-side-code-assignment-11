import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../hooks/useAuth';


const DestinationBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://scary-werewolf-45600.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
                console.log(res);
            })
    }

    const { destinationId } = useParams();
    const [destination, setDestination] = useState({})

    useEffect(() => {
        fetch(`https://scary-werewolf-45600.herokuapp.com/destinations/${destinationId}`)
            .then(res => res.json())
            .then(data => setDestination(data));
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2 className="mt-3 mb-3 text-center">PLACE INFORMATION</h2>
                    <div className="col-md-6">

                        <img src={destination.img} width="100%" alt="" />
                        <h4 className="mt-3">Description</h4>
                        <p>{destination.description}</p>

                    </div>
                    <div className="col-md-6 text-center mt-5">
                        <h3 className='text-center'>{destination.name}</h3>
                        
                        <hr />
                        <small className="text-center"> Ratings: {destination.ratings}</small>
                        <br />
                        <span> Location: {destination.location}</span>
                        <h5>Start From $ {destination.price}</h5>
                        <hr />
                        <h3>Additional information</h3>
                        <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                           
                            <input className="form-control mt-3" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />

                            <input className="form-control mt-3" defaultValue={user.email} {...register("email", { required: true, maxLength: 50 })} placeholder="Email" />


                            <input className="form-control mt-3" {...register("address")} placeholder="Address" />
                            <input className="form-control mt-3 " {...register("number")} placeholder="Phone Number" />
                            <input className="form-control mt-3 " {...register("img")} placeholder="image Url" />
                          
                           
                           <input className="btn btn-secondary mt-3" type="submit"/>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default DestinationBooking;