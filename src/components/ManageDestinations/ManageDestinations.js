import React, { useEffect, useState } from 'react';

const ManageDestinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch('https://scary-werewolf-45600.herokuapp.com/destinations')
        .then(res => res.json())
        .then(data => setDestinations(data))
    } ,[]);

    const handleDelete = id => {
        const url = `https://scary-werewolf-45600.herokuapp.com/destinations/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted');
                const remaining = destinations.filter(destination => destination._id !== id);
                setDestinations(remaining);
            }
            


        })

    }
    return (
        <div>
            <h2>manage destination </h2>
            {
                destinations.map(destination => <div key={destination._id}>
                    <h3>{destination.name}</h3>
                    <button onClick={() => handleDelete(destination._id)} className="btn btn-danger">delete</button>

                </div>)
            }
        </div>
    );
};

export default ManageDestinations;