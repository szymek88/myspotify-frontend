import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchForm from './SearchInput';
import { Col, Glyphicon } from 'react-bootstrap';
import '../../css/NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar>
            <Col md={3}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">
                            <Glyphicon glyph="music"/>
                             <h4 className="brand">MySpotify</h4>
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Col>
            <Col md={4} mdOffset={3}>
                <SearchForm/>
            </Col>
        </Navbar>
    );
}

export default NavigationBar;
