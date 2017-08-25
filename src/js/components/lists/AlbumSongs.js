import { selectSong } from '../../actions/songActions';
import { connect } from 'react-redux';
import List from './List';

export const PAGE_SIZE = 6;

const mapStateToProps = state => {
    const from = (state.activePage - 1) * PAGE_SIZE;
    const to = state.activePage * PAGE_SIZE;
    return {
        items: mapSongs(state.selectedAlbum.songs).slice(from, to),
        panelHeader: 'Songs'
    };
};

function mapSongs(songsResources) {
    return songsResources.map(songResource => {
        const song = songResource.song;
        return {
            id: song.id,
            content: song.name,
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
