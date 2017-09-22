import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { changePlaylistName } from '../../actions/playlistActions';
import { connect } from 'react-redux';

function PlaylistNameInput({ playlistName, onChange }) {
    return (
        <FormGroup controlId="playlistForm">
            <ControlLabel>Create new playlist:</ControlLabel>
            <FormControl
                type="text"
                value={ playlistName }
                placeholder="Enter Name"
                onChange={ onChange }
            />
        </FormGroup>
    );
}

PlaylistNameInput.propTypes = {
    playlistName: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        playlistName: state.playlists.playlistName
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: e => dispatch(changePlaylistName(e.target.value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistNameInput);