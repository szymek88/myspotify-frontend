import React from 'react';
import SongResults from './lists/SongResults';
import AlbumResults from './lists/AlbumResults';
import ArtistResults from './lists/ArtistResults';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';

function SearchResults(props) {
    return (
        <div>
            <Col md={6}>
                { props.songsCount > 0 && <SongResults/> }
                { props.albumsCount > 0 && <AlbumResults/> }
            </Col>
            <Col md={6}>
                { props.artistsCount > 0 && <ArtistResults/> }
            </Col>
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
