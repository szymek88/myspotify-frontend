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

const mapStateToProps = (state) => {
    return {
        songUrl: state.selectedSong.links
            .find(link => link.rel === 'audio').href
    };
};

export default connect(mapStateToProps)(AudioPlayer);
