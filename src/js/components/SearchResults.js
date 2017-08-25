import React from 'react';
import SongResults from './lists/SongResults';
import AlbumResults from './lists/AlbumResults';
import ArtistResults from './lists/ArtistResults';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row, Well, PageHeader } from 'react-bootstrap';
import Spinner from 'react-spinkit';
import '../../css/SearchResults.css';
import { search } from '../actions/searchActions';

class SearchResults extends React.Component {

    componentDidMount() {
        const { dispatch, submittedSearchQuery } = this.props;
        dispatch(search(submittedSearchQuery));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, submittedSearchQuery } = this.props;
        if (submittedSearchQuery !== prevProps.submittedSearchQuery) {
            dispatch(search(submittedSearchQuery));
        }
    }

    render() {
        let content = null;
        if (this.props.isFetching) {
            content = (
                <Col md={4} mdOffset={4}>
                    <Spinner name="wandering-cubes" className="center"/>
                </Col>
            );
        } else {
            content = (
                <div>
                    <Col md={6}>
                        <PageHeader>Search Results</PageHeader>
                        { this.props.songsCount > 0 && <SongResults/> }
                    </Col>
                    <Col md={6}>
                        { this.props.albumsCount > 0 && <AlbumResults/> }
                        { this.props.artistsCount > 0 && <ArtistResults/> }
                    </Col>
                </div>
            );
        }

        return (
            <Well>
                <Row>
                    { content }
                </Row>
            </Well>
        );
    }
}

SearchResults.propTypes = {
    songsCount: PropTypes.number.isRequired,
    albumsCount: PropTypes.number.isRequired,
    artistsCount: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    submittedSearchQuery: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        songsCount: state.songs.items.length,
        albumsCount: state.albums.items.length,
        artistsCount: state.artists.items.length,
        isFetching: isFetching(state),
        submittedSearchQuery: state.submittedSearchQuery
    };
};

function isFetching(state) {
    return state.songs.isFetching ||
        state.albums.isFetching ||
        state.artists.isFetching;
}

export default connect(mapStateToProps)(SearchResults);
