import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-drab.vercel.app/course-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className='my-5'>

            <div>
                {catagories.map(catagory => <p key={catagory.id}><Link style={{ textDecoration: 'none' }} className='text-black fw-bold' to={`/catagory/${catagory.id}`}>{catagory.name}</Link></p>)}
            </div>
        </div>
    );
};

export default LeftNavBar;