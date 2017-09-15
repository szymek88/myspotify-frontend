import React from 'react';
import InputWithLabel from './InputWithLabel';
import { changePasswordConfirmation } from '../../actions/authActions';
import { connect } from 'react-redux';

function PasswordConfirmationInput({ passwordConfirmation, onChange }) {
    return (
        <InputWithLabel controlId="passwordConfirmationInput" labelText="Confirm Password:"
                        inputType="password" placeholder="Confirm Password"
                        value={ passwordConfirmation } onChange={ onChange } />
    );
}

const mapStateToProps = state => {
    return {
        passwordConfirmation: state.auth.credentials.passwordConfirmation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: passwordConfirmation => dispatch(
            changePasswordConfirmation(passwordConfirmation))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordConfirmationInput);
