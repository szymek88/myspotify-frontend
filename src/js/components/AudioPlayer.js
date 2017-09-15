import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/AudioPlayer.css';
import  { findLink } from '../utils';
import { nextSong } from '../actions/playlistActions';
import { Image, Well, ButtonToolbar } from 'react-bootstrap';
import NowPlaying from './NowPlaying';
import NextSongButton from './buttons/NextSongButton';
import PrevSongButton from './buttons/PrevSongButton';
import { appendAuthToken } from '../utils';

function AudioPlayer(props) {
    return (
        <Well>
            <NowPlaying/>
            <Image src={ props.imageUrl } thumbnail/>
            <ButtonToolbar className="buttonToolbar">
                <PrevSongButton/>
                <NextSongButton/>
            </ButtonToolbar>
            <ReactAudioPlayer src={props.songUrl} onEnded={props.onEnded}
                              controls autoPlay className="audio"/>
        </Well>
    );
};

AudioPlayer.propTypes = {
    songUrl: PropTypes.string.isRequired,
    onEnded: PropTypes.func.isRequired,
    imageUrl: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    const links = state.songs.selectedItem.links;
    return {
        songUrl: appendAuthToken(findLink(links, 'audio')),
        imageUrl: appendAuthToken(findLink(links, 'image'))
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEnded: () => dispatch(nextSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
