import React from 'react';
import { FormGroup, Col, Button } from 'react-bootstrap';
import { LABEL_COLS, INPUT_COLS } from '../forms/InputWithLabel';
import PropTypes from 'prop-types';

export default function FormButton({ onClick, credentials, text }) {
    return (
        <FormGroup>
            <Col mdOffset={ LABEL_COLS } md={ INPUT_COLS }>
                <Button type="submit" onClick={ e => {
                    e.preventDefault();
                    onClick(credentials);
                } }>
                    { text }
                </Button>
            </Col>
        </FormGroup>
    );
}

FormButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    credentials: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        passwordConfirmation: PropTypes.string

    }).isRequired,
    text: PropTypes.string.isRequired
};