import React from 'react';
import { Col } from 'react-bootstrap';
import { LABEL_COLS, INPUT_COLS } from './InputWithLabel';
import '../../../css/AccountCreatedMsg.css';

export default function AccountCreatedMsg() {
    return (
        <Col mdOffset={ LABEL_COLS } md={ INPUT_COLS }>
            <p className="successMsg">
                Account Created.
            </p>
        </Col>
    )
}
