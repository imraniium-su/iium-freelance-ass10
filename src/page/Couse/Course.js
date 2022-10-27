import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, FaDownload } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import ReactToPdf from 'react-to-pdf';

const Course = () => {
    const course = useLoaderData();
    const { picture, price, time, title, rating, details, category_id, total_view, _id } = course;
    const ref = React.createRef();
    return (
        <div className='my-4 mx-2  '>
            <div className="" ref={ref}>
                <div className="card shadow-lg rounded">
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body bg-light">
                        <h5 className="card-title">{title}</h5>
                        <p>{details}</p>
                        <div className='d-flex justify-content-between'>
                            <p>Course Cost: {price}$</p>
                            <div>
                                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                                    {({ toPdf }) => (
                                        <button onClick={toPdf}>Download <FaDownload className='me-4'></FaDownload></button>
                                    )}
                                </ReactToPdf>

                            </div>
                        </div>
                        <p className='mt-0'>Duration : {time} Month</p>
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
                            <p><Link to={`/course-checkout/${_id}`}><Button className='w-100 fw-bold' variant="info"> Get premium access </Button></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;