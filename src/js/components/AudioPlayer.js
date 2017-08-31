import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/AudioPlayer.css';
import  { findLink } from '../mappingUtils';
import { nextSong } from '../actions/playlistActions';

function AudioPlayer({ songUrl, onEnded }) {
    return (
        <ReactAudioPlayer src={songUrl} onEnded={onEnded} controls
                          autoPlay className="audio"/>
    );
};

AudioPlayer.propTypes = {
    songUrl: PropTypes.string.isRequired,
    onEnded: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        songUrl: findLink(state.songs.selectedItem.links, 'audio')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnded: () => dispatch(nextSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
