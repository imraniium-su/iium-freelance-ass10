import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const checkout = useLoaderData();
    const { picture, title } = checkout;
    return (
        <div className='rounded shadow-lg my-3 p-3'>
            <img src={picture} className="card-img-top" alt="..." />
            <h2 className="card-title fw-bold text-center text-warning design">{title}</h2>
        </div>
    );
};

export default Checkout;