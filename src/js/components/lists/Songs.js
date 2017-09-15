import { selectSong } from '../../actions/songActions';
import { connect } from 'react-redux';
import List from './List';
import { mapSongs } from '../../utils';

export const PAGE_SIZE = 6;

const mapStateToProps = state => {
    const from = (state.activePage - 1) * PAGE_SIZE;
    const to = state.activePage * PAGE_SIZE;
    return {
        items: mapSongs(state.songs.items, false).slice(from, to),
        panelHeader: 'Songs'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: song => dispatch(selectSong(song))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
