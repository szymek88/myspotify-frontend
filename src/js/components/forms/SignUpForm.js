import React, { Component } from 'react';
import CredentialsForm from './CredentialsForm';
import SignUpButton from '../buttons/SignUpButton';
import PasswordConfirmationInput from './PasswordConfirmationInput';
import AccountCreatedMsg from './AccountCreatedMsg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSigningUp } from '../../actions/authActions';

class SignUpForm extends Component {

    componentDidMount() {
        this.props.dispatch(setSigningUp(true));
    }

    componentWillUnmount() {
        this.props.dispatch(setSigningUp(false));
    }

    render() {
        return (
            <CredentialsForm button={ <SignUpButton/> }
                             header="Sign Up to MySpotify.">
                <PasswordConfirmationInput/>
                { this.props.isSignedUp && <AccountCreatedMsg/> }
            </CredentialsForm>
        );
    }
}

SignUpForm.propTypes = {
    isSignedUp: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isSignedUp: state.auth.isSignedUp
    };
};

export default connect(mapStateToProps)(SignUpForm);
