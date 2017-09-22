import { Button } from 'react-bootstrap';
import { setFormVisible, changePlaylistName,
    setDeleteMode } from '../../actions/playlistActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(setFormVisible(true));
            dispatch(changePlaylistName(''));
            dispatch(setDeleteMode(false));
        }
    };
};

export default connect(null, mapDispatchToProps)(Button);