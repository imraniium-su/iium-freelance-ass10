import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h3>All courses : {catagories.length}</h3>
            <div>
                {catagories.map(catagory => <p key={catagory.id}><Link className='text-black' to={`/catagory/${catagory.id}`}>{catagory.name}</Link></p>)}
            </div>
        </div>
    );
};

export default LeftNavBar;