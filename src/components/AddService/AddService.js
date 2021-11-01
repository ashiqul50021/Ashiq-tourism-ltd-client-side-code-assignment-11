import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://scary-werewolf-45600.herokuapp.com/destinations', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
             console.log(res);
        })
    }
        return (
            <div className="add-service text-center">
                <h2>Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
                    <input {...register("location", { required: true, maxLength: 20 })} placeholder="location" />
                    <input {...register("ratings", { required: true, maxLength: 20 })} placeholder="Ratings" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input type="submit" />
                </form>
            </div>
        );
    };
    export default AddService;