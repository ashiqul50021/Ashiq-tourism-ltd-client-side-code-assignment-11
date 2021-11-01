import React from 'react';

import { useForm } from "react-hook-form";
import Orders from '../../Orders/Orders';
// import Orders from '../../Orders/Orders';

const Order = (props) => {
    const {orders, setOrders} = Orders();
    const {  reset } = useForm();
    const {_id, img, name, email, number } = props.order;

    const handleDelete = id => {
        const url = `https://scary-werewolf-45600.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted');
                   

                }



            })

    }
    return (
        <div className="col">
            <div className="card h-100  p-1 mb-5 bg-body rounded border-0">
                <img src={img} className="card-img-top rounded" alt="..." height="100%" />
                <div className="card-body">
                    <h5 style={{ alignItems: 'left' }} className="card-title">{name}</h5>

                    <small>Email: {email}</small>

                    <p>phone: {number}</p>

                    <button onClick={() => handleDelete(_id)} className="btn btn-danger">delete</button>
                </div>







            </div>
        </div>
    );
};
export default Order;