import React, { Component } from 'react';
import GenericSection from './GenericSection';
import { PageHeader } from 'react-bootstrap';
import { fetchSongs } from '../../actions/songActions';
import PropTypes from 'prop-types';
import { findLink } from '../../mappingUtils';
import { connect } from 'react-redux';

class ArtistSection extends Component {

    componentDidMount() {
        const { dispatch, songsUrl } = this.props;
        dispatch(fetchSongs(songsUrl));
    }

    render() {
        const { artistName, imageUrl, isFetching } = this.props;
        return (
            <GenericSection
                header={ <PageHeader>{ artistName }</PageHeader> }
                playButtonText="Play Songs"
                imageUrl={ imageUrl }
                isFetching={ isFetching }
            />
        );
    }
}

ArtistSection.propTypes = {
    artistName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    songsUrl: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { artist, links } = state.artists.selectedItem;
    return {
        artistName: artist.name,
        imageUrl: findLink(links, 'image'),
        isFetching: state.songs.isFetching,
        songsUrl: findLink(links, 'songs')
    };
};

export default connect(mapStateToProps)(ArtistSection);
