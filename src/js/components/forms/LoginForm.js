import React from 'react';
import CredentialsForm from './CredentialsForm';
import SignInButton from '../buttons/SignInButton';

export default function LoginForm() {
    return (
        <CredentialsForm button={ <SignInButton/> }
                         header="Sign In to MySpotify."/>
    );
}