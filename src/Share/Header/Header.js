import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import logo from '../../images/logo.png'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import LeftNavBar from '../LeftsideNavBar/LeftNavBar';
import './Header.css'
const Header = () => {
    const { user, logout, theme, setTheme } = useContext(AuthContext);

    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    console.log(user);

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('light')
        }
        console.log(theme);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand ><Link style={{ textDecoration: 'none' }} to='/'><img style={{ height: '60px', weight: '30px' }} src={logo} alt="" /> <span className='text-black fs-4  fw-bold design' >IIUM FREELANCE</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link ><Link className='text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link className='text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link ><Link className='text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/block'>Blog</Link></Nav.Link>
                    </Nav>

                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span className='d-flex align-items-center justify-content-center me-3 fw-bold'>{user?.displayName}</span>
                                        <Button className=' mx-auto' onClick={handlelogout} variant="light">Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3 d-flex align-items-center justify-content-center text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/login'>Login</Link>
                                        <Link className='me-3 d-flex align-items-center justify-content-center text-black fw-bold fs-5' style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {user?.photoURL ?
                                <Image className='ms-3 d-flex align-items-center justify-content-center' style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image> : <FaUser ></FaUser>
                            }
                        </Link>

                    </Nav>
                    <FaSun className='ms-3'></FaSun>
                    <div className="form-check form-switch mx-2">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleTheme} />
                    </div>
                    <FaMoon></FaMoon>

                    <div className='d-lg-none'>
                        <LeftNavBar ></LeftNavBar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;