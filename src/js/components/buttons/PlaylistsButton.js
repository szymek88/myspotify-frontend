import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../css/PlaylistsButton.css';
import { showComponent } from '../../actions/mainComponentActions';
import PlaylistsSection from '../sections/PlaylistsSection';
import { connect } from 'react-redux';

function PlaylistsButton({ onClick }) {
    return (
        <Button bsStyle="primary" className="playlistsButton"
                onClick={ onClick }>
            Playlists
        </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(showComponent(<PlaylistsSection/>))
    };
};

export default connect(null, mapDispatchToProps)(PlaylistsButton);