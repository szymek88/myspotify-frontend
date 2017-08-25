import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenericSection from './GenericSection';
import { findLink } from '../mappingUtils';
import { fetchSongs } from '../actions/songActions';

class AlbumSection extends Component {

    componentDidMount() {
        const { dispatch, songsUrl } = this.props;
        dispatch(fetchSongs(songsUrl));
    }

    render() {
        const { albumName, artistName,
            imageUrl, isFetching } = this.props;
        return (
            <GenericSection
                header={
                    <PageHeader>
                        { albumName }
                        <small> { artistName }</small>
                    </PageHeader>
                }
                playButtonText="Play Album"
                imageUrl={ imageUrl }
                isFetching={ isFetching }
            />
        );
    }
}

AlbumSection.propTypes = {
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    songsUrl: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    const { album, links } = state.albums.selectedItem;
    const { name, artist } = album;
    return {
        albumName: name,
        artistName: artist.name,
        imageUrl: findLink(links, 'image'),
        isFetching: state.songs.isFetching,
        songsUrl: findLink(links, 'songs')
    };
};

export default connect(mapStateToProps)(AlbumSection);
