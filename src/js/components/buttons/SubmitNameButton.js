import React from 'react';
import { Button } from 'react-bootstrap';
import { createPlaylist } from '../../actions/playlistActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SubmitNameButton({ onClick, playlistName, disabled }) {
    return (
        <Button disabled={ disabled }
                onClick={ () => onClick(playlistName) }>
            Submit
        </Button>
    );
}

SubmitNameButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    playlistName: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const playlistName = state.playlists.playlistName;
    return {
        playlistName,
        disabled: playlistName === ''
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: playlistName => dispatch(createPlaylist(playlistName))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNameButton);