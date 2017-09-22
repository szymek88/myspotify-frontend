import { setQueue } from '../../actions/playQueueActions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { setDeleteMode } from '../../actions/playlistActions';

const mapStateToProps = state => {
    return {
        disabled: state.songs.isFetching
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(setQueue());
            dispatch(setDeleteMode(false));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
