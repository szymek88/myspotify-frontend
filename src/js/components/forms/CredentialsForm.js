import React from 'react';
import { Well, Form } from 'react-bootstrap';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../../css/CredentialsForm.css';
import CredentialsErrorMsg from './CredentialsErrorMsg';

function CredentialsForm({ children, button, errorMsg, header }) {
    return (
        <Well>
            <h2 className="formHeader">{ header }</h2>
            <Form horizontal>
                <UsernameInput/>
                <PasswordInput/>
                { children }
                { errorMsg && <CredentialsErrorMsg/> }
                { button }
            </Form>
        </Well>
    );
}

CredentialsForm.propTypes = {
    button: PropTypes.element.isRequired,
    errorMsg: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        errorMsg: state.auth.errorMsg
    };
};

export default connect(mapStateToProps)(CredentialsForm);