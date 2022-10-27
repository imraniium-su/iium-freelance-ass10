import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='my-4'>
            <hr />
            <h5 className='text-center'>Visit Us</h5>
            <address className='d-flex justify-content-center'>

                iiumfreelance@gmail.com <br />
                Box 53100, Gombak, Selangor. <br />
                Malaysia.
            </address>
            <div className='d-flex justify-content-center'>
                <FaFacebook ></FaFacebook> <FaInstagram className='mx-2'></FaInstagram><FaLinkedin></FaLinkedin><FaTwitter className='mx-2'></FaTwitter>
            </div>
            <p className='text-center'>Copyright@ IIUM Freelance</p>
        </div>
    );
};

export default Footer;