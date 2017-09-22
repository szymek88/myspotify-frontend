import { onSongClick } from '../../actions/songActions';
import { connect } from 'react-redux';
import List from './List';
import { mapSongs } from '../../utils';
import { PAGE_SIZE } from './Songs';

const mapStateToProps = state => {
    const from = (state.activePage - 1) * PAGE_SIZE;
    const to = state.activePage * PAGE_SIZE;
    return {
        items: mapSongs(state.songs.items, true).slice(from, to),
        panelHeader: 'Songs'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: song => dispatch(onSongClick(song))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);