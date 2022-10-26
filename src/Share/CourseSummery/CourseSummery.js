import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
const CourseSummery = ({ course }) => {
    const { picture, price, time, title, rating, details, _id, total_view } = course;
    return (
        <div >
            <div className="col">
                <div className="card shadow-lg rounded">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mb-1 fw-bold">{title}</h5>
                        <p className="card-text mb-1">{details.length > 40 ?
                            <>{details.slice(0, 35) + '...'}<Link to={`/course/${_id}`}>Read more</Link></> :
                            <>{details}</>}</p>
                        <p className='mb-1'>Course Cost: ${price}</p>
                        <p>Duration : {time} Month</p>
                        <div className=" d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <FaStar className='text-warning me-2'></FaStar>
                                <span>{rating?.number}</span>
                            </div>
                            <div>
                                <FaEye className='me-2'></FaEye>
                                <span>
                                    Purchase : {total_view}
                                </span>
                            </div>
                        </div>
                        <div className='w-60 mx-auto'>
                            <Link to={`/course-checkout/${_id}`}><Button className='w-100 fw-bold' variant="info"> Get premium access </Button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseSummery;