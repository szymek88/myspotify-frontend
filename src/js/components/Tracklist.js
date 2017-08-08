import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../../Tracklist.css';

function Tracklist({ songs, onSongClick }) {
    const songsList = songs.map(song =>
        <ListGroupItem key={song.id.toString()}
                       onClick={() => onSongClick(song.id)}
                       header={song.name}
        >
            {song.artistName}
        </ListGroupItem>);

    return (
        <div>
            <ListGroup>
                {songsList}
            </ListGroup>
        </div>
    );
};

Tracklist.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        artistName: PropTypes.string.isRequired
    })).isRequired,
    onSongClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
      songs: state.songs.songResources.map(songResource => {
          return {
              id: songResource.song.id,
              name: songResource.song.name,
              artistName: songResource.song.artist.name
          };
      })
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSongClick: (id) => {
            dispatch(selectSong(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracklist);
