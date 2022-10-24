import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../images/logo.png'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand ><Link to='/'><img style={{ height: '65px', }} src={logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link ><Link className='text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className='text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/about'>Block</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='d-flex align-items-center justify-content-center'>{user?.displayName}</span>
                                        <Button variant="light">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-2 d-flex align-items-center justify-content-center text-bold' to='/login'>Login</Link>
                                        <Link className=' d-flex align-items-center justify-content-center' to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        {user?.photoURL ?
                            <Image style={{ height: '20px' }} roundedCircle src={user.photoURL}></Image> : <FaUser></FaUser>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;