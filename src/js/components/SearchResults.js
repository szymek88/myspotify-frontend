import React from 'react';
import Tracklist from './Tracklist';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SearchResults(props) {
    return (
        <div>
            { props.songsCount > 0 && <Tracklist/> }
            { props.albumsCount > 0 && <AlbumList/> }
            { props.artistsCount > 0 && <ArtistList/> }
        </div>
    );
}

SearchResults.propTypes = {
    songsCount: PropTypes.number.isRequired,
    albumsCount: PropTypes.number.isRequired,
    artistsCount: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    return {
        songsCount: state.searchResults.results.songs.length,
        albumsCount: state.searchResults.results.albums.length,
        artistsCount: state.searchResults.results.artists.length
    };
};

export default connect(mapStateToProps)(SearchResults);
