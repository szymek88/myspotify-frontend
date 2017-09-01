import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function NowPlaying({songName, artistName}) {
    return (
        <Panel header="Now Playing:" bsStyle="primary">
            {`${artistName} - ${songName}`}
        </Panel>
    );
}

NowPlaying.propTypes = {
    songName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { name, artist } = state.songs.selectedItem.song;
    return {
        songName: name,
        artistName: artist.name
    };
};

export default connect(mapStateToProps)(NowPlaying);