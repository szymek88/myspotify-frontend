import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import RightCornerButton from './RightCornerButton';
import React from 'react';

function LogoutButton({ onClick }) {
    return (
        <RightCornerButton onClick={ onClick }>Log Out</RightCornerButton>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(LogoutButton);
