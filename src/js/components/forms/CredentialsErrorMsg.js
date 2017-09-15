import React from 'react';
import { Col } from 'react-bootstrap';
import { LABEL_COLS, INPUT_COLS } from './InputWithLabel';
import '../../../css/CredentialsErrorMsg.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CredentialsErrorMsg({ errorMsg }) {
    let text = '';
    if (errorMsg === 'Unauthorized') {
        text = 'Invalid credentials.'
    } else if (errorMsg === 'Conflict') {
        text = 'This username is already in use.'
    } else {
        text = errorMsg
    }
    return (
        <Col mdOffset={ LABEL_COLS } md={ INPUT_COLS }>
            <p className="errorMsg">
                { text }
            </p>
        </Col>
    );
}

CredentialsErrorMsg.propTypes = {
    errorMsg: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        errorMsg: state.auth.errorMsg
    };
};

export default connect(mapStateToProps)(CredentialsErrorMsg);