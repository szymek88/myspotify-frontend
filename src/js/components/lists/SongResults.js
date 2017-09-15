import { connect } from 'react-redux';
import { selectSong } from '../../actions/songActions';
import List from './List';
import { mapSongs } from '../../utils';

const mapStateToProps = state => {
    return {
        items: mapSongs(state.songs.items, true),
        panelHeader: 'Songs'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: song => dispatch(selectSong(song))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
