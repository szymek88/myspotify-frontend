import React from 'react';
import CredentialsForm from './CredentialsForm';
import SignUpButton from '../buttons/SignUpButton';
import PasswordConfirmationInput from './PasswordConfirmationInput';
import AccountCreatedMsg from './AccountCreatedMsg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SignUpForm({ isSignedUp }) {
    return (
        <CredentialsForm button={ <SignUpButton/> }
                         header="Sign Up to MySpotify.">
            <PasswordConfirmationInput/>
            { isSignedUp && <AccountCreatedMsg/> }
        </CredentialsForm>
    );
}

SignUpForm.propTypes = {
    isSignedUp: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isSignedUp: state.auth.isSignedUp
    };
};

export default connect(mapStateToProps)(SignUpForm);
