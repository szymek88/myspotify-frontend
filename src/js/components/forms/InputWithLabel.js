import React from 'react';
import { FormGroup, Col, ControlLabel,
    FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const INPUT_COLS = 9;
const ALL_COLS = 12;
export const LABEL_COLS = ALL_COLS - INPUT_COLS;

export default function InputWithLabel({ controlId, labelText,
    inputType, placeholder, value, onChange }) {
    return (
        <FormGroup controlId={ controlId }>
            <Col componentClass={ ControlLabel } md={ LABEL_COLS }>
                { labelText }
            </Col>
            <Col md={ INPUT_COLS }>
                <FormControl type={ inputType }
                             placeholder={ placeholder }
                             value={ value }
                             onChange={ e => onChange(e.target.value) }/>
            </Col>
        </FormGroup>
    );
}

InputWithLabel.propTypes = {
    controlId: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'password']).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};