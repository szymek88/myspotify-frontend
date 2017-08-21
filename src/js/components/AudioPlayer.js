import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/AudioPlayer.css';

function AudioPlayer({ songUrl }) {
    return (
        <ReactAudioPlayer src={songUrl} controls autoPlay className="audio"/>
    );
};

AudioPlayer.propTypes = {
  songUrl: PropTypes.string.isRequired
};

function getSongUrl(state) {
    const songResource = state.songs.songResources.find(songResource => {
        return songResource.song.id === state.selectedSongId;
    });

    return songResource._links.audio.href;
}

const mapStateToProps = (state) => {
    return {
        songUrl: getSongUrl(state)
    };
};

export default connect(mapStateToProps)(AudioPlayer);
