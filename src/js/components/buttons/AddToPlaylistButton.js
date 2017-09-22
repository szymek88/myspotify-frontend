import { setModalVisible } from '../../actions/playlistActions';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import React from 'react';
import '../../../css/AddToPlaylistButton.css';

function AddToPlaylistButton({ onClick }) {
    return (
        <Button bsStyle="primary" block
                onClick={ onClick }
                className="addToPlaylistButton">
            <Glyphicon glyph="plus"/> Add to Playlist
        </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(setModalVisible(true))
    }
};

export default connect(null, mapDispatchToProps)(AddToPlaylistButton);