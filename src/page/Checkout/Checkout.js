import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const checkout = useLoaderData();
    const { picture, title, price } = checkout;
    return (
        <div className='rounded shadow-lg my-3 p-3'>
            <h2 className="card-title fw-bold text-center text-warning design mb-2">{title}</h2>

            <h5 className='text-center'>Price: $ {price}</h5>

        </div>
    );
};

export default Checkout;