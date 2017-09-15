import React from 'react';
import RightCornerButton  from './RightCornerButton';
import { showLoginForm } from '../../actions/mainComponentActions';
import { connect } from 'react-redux';

function ShowLoginButton({ onClick }) {
    return (
        <RightCornerButton onClick={ onClick }>Log In</RightCornerButton>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(showLoginForm())
    };
};

export default connect(null, mapDispatchToProps)(ShowLoginButton);
