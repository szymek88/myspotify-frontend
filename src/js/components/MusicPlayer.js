import React from 'react';
import Tracklist from './Tracklist';
import AudioPlayer from './AudioPlayer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UNSELECTED } from '../reducers';

function MusicPlayer({ selectedSongId }) {
    const shouldRenderAudioPlayer = selectedSongId !== UNSELECTED;
    return (
      <div>
          <Tracklist />
          { shouldRenderAudioPlayer && <AudioPlayer /> }
      </div>
    );
};

MusicPlayer.propTypes = {
    selectedSongId: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
      selectedSongId: state.selectedSongId
  };
};

export default connect(mapStateToProps)(MusicPlayer);
