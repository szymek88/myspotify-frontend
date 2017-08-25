import { PAGE_SIZE } from './lists/AlbumSongs';
import { selectPage } from '../actions/pageActions';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';

const mapStateToProps = state => {
    return {
        items: calculatePages(state.selectedAlbum.songs.length),
        activePage: state.activePage
    };
};

function calculatePages(songsLength) {
    const fullPages = songsLength / PAGE_SIZE;
    return (songsLength % PAGE_SIZE === 0) ? fullPages : fullPages + 1;
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: page => dispatch(selectPage(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);