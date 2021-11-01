import React, { useEffect, useState } from 'react';

import useAuth from '../components/hooks/useAuth';
import Order from '../components/Order/Order';


const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    console.log(user)
    useEffect(() => {
        const userId = user.email;
        console.log(userId)
        fetch(`https://scary-werewolf-45600.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))


    }, [])

   
    const item = orders?.filter(item => item.email === user.email)
    return (
        orders,
        setOrders,
        <div>


            <div className="container mb-5 text-center">
                <h3 className=" ">Total Order : {item.length}</h3>

                <p>these location are best location for beautiful tour!</p>
                <div className="row row-cols-1 row-cols-md-4 g-4 ">
                    {
                        item.map(order =>
                            <Order order={order}>




                                
                            </Order>
                        )
                    }



                </div>
            </div>



        </div >
    );
};

export default Orders;