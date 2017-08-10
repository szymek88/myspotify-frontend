import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchForm from './SearchForm';
import { Col } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar>
            <Col md={6}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">MySpotify</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Col>
            <Col md={4}>
                <SearchForm/>
            </Col>
        </Navbar>
    );
}

export default NavigationBar;
