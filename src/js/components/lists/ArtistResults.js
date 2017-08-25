import List from './List';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        items: mapArtists(state.searchResults.results.artists),
        panelHeader: 'Artists'
    };
};

function mapArtists(artistsResources) {
    return artistsResources.map(artistResource => {
        const artist = artistResource.artist;
        return {
            id: artist.id,
            content: artist.name,
            resource: artistResource
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: artist => console.log('artist ' + artist.artist.id + ' clicked')
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
