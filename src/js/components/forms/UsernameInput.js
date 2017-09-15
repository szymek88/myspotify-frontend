import React from 'react';
import InputWithLabel from './InputWithLabel';
import { changeUsername } from '../../actions/authActions';
import { connect } from 'react-redux';

function UsernameInput({ username, onChange }) {
    return (
        <InputWithLabel controlId="usernameInput" labelText="Username:"
                        inputType="text" placeholder="Username"
                        value={ username } onChange={ onChange }/>
    );
}

const mapStateToProps = state => {
    return {
        username: state.auth.credentials.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: username => dispatch(changeUsername(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsernameInput);