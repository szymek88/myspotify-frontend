import { connect } from 'react-redux';
import { selectSong } from '../actions/songActions';
import List from './List';

const mapStateToProps = state => {
    return {
        items: mapSongs(state.searchResults.results.songs),
        panelHeader: 'Songs'
    };
};

function mapSongs(songsResources) {
    const songs = songsResources.map(songResources => songResources.song);
    return songs.map(song => {
        return {
            id: song.id,
            header: song.name,
            content: song.artist.name
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => dispatch(selectSong(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
