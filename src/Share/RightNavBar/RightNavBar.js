import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaArrowRight, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch, FaPhone, FaAddressBook } from 'react-icons/fa';
const RightNavBar = () => {
    return (
        <div className='mt-5 '>
            <Carousel >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src='https://media.istockphoto.com/photos/education-picture-id1130121962?k=20&m=1130121962&s=612x612&w=0&h=sn37wsoZ4bqE8-kQm6jd_tc_-eb9-gCrKbieo0mIlGg='
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://media.istockphoto.com/photos/smart-attractive-asian-man-vr-with-examine-human-body-system-health-picture-id1170065455?k=20&m=1170065455&s=612x612&w=0&h=EHbJEjQfgMw_BfY7gnUCsV9lDT3AlACB5pXGQFRt974='
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
            <p className='mt-2 '><Link to='/'>About more<FaArrowRight className='ms-2'></FaArrowRight> </Link></p>
            <div>
                <h6>Find Us On</h6>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>

                </ListGroup>
            </div>
            <div className='bg-light shadow-md rounded mt-3 p-3'>
                <h6 className='text-center'>Contact</h6>
                <p><FaPhone className='me-2'></FaPhone>011123422</p>
                <p><FaAddressBook></FaAddressBook> Gombak, Malaysia</p>


            </div>
        </div>
    );
};

export default RightNavBar;