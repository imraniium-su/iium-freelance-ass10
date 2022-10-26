import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Course = () => {
    const course = useLoaderData();
    const { picture, price, time, title, rating, details, category_id, total_view } = course;
    return (
        <div className='my-4 mx-2 '>
            <div className="">
                <div className="card shadow-lg rounded">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{details}</p>
                        <p>Course Cost: {price}$</p>
                        <p>Duration : {time} Month</p>
                        <div className=" d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <FaStar className='text-warning me-2'></FaStar>
                                <span>{rating?.number}</span>
                            </div>
                            <div>
                                <FaEye className='me-2'></FaEye>
                                <span>
                                    Purches : {total_view}
                                </span>
                            </div>
                        </div>
                        <div className=' d-flex justify-content-around'>
                            <p className=''><Link to={`/catagory/${category_id}`}><Button className='w-100 fw-bold' variant="info">All Catagorey Course</Button></Link></p>
                            <p><Button className='w-100 fw-bold' variant="info">Add To Cart</Button></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;