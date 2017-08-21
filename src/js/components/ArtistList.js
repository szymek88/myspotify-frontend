import List from './List';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        items: mapArtists(state.searchResults.results.artists),
        panelHeader: 'Artists'
    };
};

function mapArtists(artistsResources) {
    const artists = artistsResources.map(artistsResources => artistsResources.artist);
    return artists.map(artist => {
        return {
            id: artist.id,
            content: artist.name
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => console.log('artist ' + id + ' clicked')
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
