import React, { useEffect, useState } from 'react';
import ManageOrders from './ManageOrders';
// import useAuth from '../hooks/useAuth';

const ManageOrder = () => {
    const [manageOrders, setManageOrders] = useState([])
    
    useEffect(() => {
        
        fetch(`https://scary-werewolf-45600.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setManageOrders(data))
           

    }, [])
    return (
        <div>
      

        <div className="container mb-5 text-center">
        <h3 className=" ">Popular Destination</h3>
        <p>these location are best location for beautiful tour!</p>
        <div className="row row-cols-1 row-cols-md-4 g-4 ">
        {
            manageOrders.map(manageOrder =>
                <ManageOrders order={manageOrder}>

                  



                </ManageOrders>
            )
        }



        </div>
    </div>

        

    </div >
);
};
export default ManageOrder;