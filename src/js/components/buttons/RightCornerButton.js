import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/RigthCornerButton.css';
import { Button } from 'react-bootstrap';

export default function RightCornerButton({ onClick, children }) {
    return (
        <Button bsStyle="primary" onClick={ onClick }
                className="rightCornerButton">{ children }</Button>
    );
}

RightCornerButton.propTypes = {
    onClick: PropTypes.func.isRequired
};