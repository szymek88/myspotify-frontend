import React from 'react';
import InputWithLabel from './InputWithLabel';
import { changePassword } from '../../actions/authActions';
import { connect } from 'react-redux';

function PasswordInput({ password, onChange }) {
    return (
        <InputWithLabel controlId="passwordInput" labelText="Password:"
                        inputType="password" placeholder="Password"
                        value={ password } onChange={ onChange }/>
    );
}

const mapStateToProps = state => {
    return {
        password: state.auth.credentials.password
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: password => dispatch(changePassword(password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput);
