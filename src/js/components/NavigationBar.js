import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchForm from './search/SearchInput';
import { Col, Glyphicon } from 'react-bootstrap';
import '../../css/NavigationBar.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogoutButton from './buttons/LogoutButton';
import ShowSignUpButton from './buttons/ShowSignUpButton';
import ShowLoginButton from './buttons/ShowLoginButton';

function NavigationBar({ isAuthenticated, isSigningUp }) {
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
            { isAuthenticated && (
                <Col md={4} mdOffset={3}>
                    <SearchForm/>
                </Col>
            )}
            <Col md={1} mdOffset={isAuthenticated ? 1 : 8}>
                { getButton(isAuthenticated, isSigningUp) }
            </Col>
        </Navbar>
    );
}

function getButton(isAuthenticated, isSigningUp) {
    if (!isAuthenticated) {
        return isSigningUp ? <ShowLoginButton/> : <ShowSignUpButton/>;
    }
    return <LogoutButton/>;
}

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isSigningUp: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { isAuthenticated, isSigningUp } = state.auth;
    return {
        isAuthenticated,
        isSigningUp
    };
};

export default connect(mapStateToProps)(NavigationBar);
