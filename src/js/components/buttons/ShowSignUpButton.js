import React from 'react';
import RightCornerButton  from './RightCornerButton';
import { showSignUpForm } from '../../actions/mainComponentActions';
import { connect } from 'react-redux';

function ShowSignUpButton({ onClick }) {
    return (
        <RightCornerButton onClick={ onClick }>Sign Up</RightCornerButton>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(showSignUpForm())
    };
};

export default connect(null, mapDispatchToProps)(ShowSignUpButton);