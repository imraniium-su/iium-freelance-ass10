import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
const CourseSummery = ({ course }) => {
    const { picture, price, time, title, rating, details, _id, total_view } = course;
    return (
        <div >
            <div className="col">
                <div className="card">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{details.length > 40 ?
                            <>{details.slice(0, 35) + '...'}<Link to={`/course/${_id}`}>Read more</Link></> :
                            <>{details}</>}</p>
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
                        <div className='w-60 mx-auto'>
                            <Button className='w-100 fw-bold' variant="info">Add To Cart</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseSummery;