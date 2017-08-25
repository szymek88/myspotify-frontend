import List from './List';
import { connect } from 'react-redux';
import { showArtistSection } from '../../actions/centralSectionActions';

const mapStateToProps = state => {
    return {
        items: mapArtists(state.artists.items),
        panelHeader: 'Artists'
    };
};

function mapArtists(artistsResources) {
    return artistsResources.map(artistResource => {
        const { id, name } = artistResource.artist;
        return {
            id,
            content: name,
            resource: artistResource
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: artist => dispatch(showArtistSection(artist))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
