import { setPlaylist } from '../../actions/playlistActions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapStateToProps = state => {
    return {
        disabled: state.songs.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(setPlaylist())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
