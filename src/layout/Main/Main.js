import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Share/Footer/Footer';
import Header from '../../Share/Header/Header';
import LeftNavBar from '../../Share/LeftsideNavBar/LeftNavBar';
import RightNavBar from '../../Share/RightNavBar/RightNavBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftNavBar></LeftNavBar>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='2' >
                        <RightNavBar></RightNavBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;