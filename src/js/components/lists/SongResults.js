import { connect } from 'react-redux';
import { selectSong } from '../../actions/songActions';
import List from './List';

const mapStateToProps = state => {
    return {
        items: mapSongs(state.searchResults.results.songs),
        panelHeader: 'Songs'
    };
};

function mapSongs(songsResources) {
    return songsResources.map(songResource => {
        const song = songResource.song;
        return {
            id: song.id,
            header: song.name,
            content: song.artist.name,
            resource: songResource
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: song => dispatch(selectSong(song))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
