import { setFormVisible, changePlaylistName } from '../../actions/playlistActions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(setFormVisible(false));
            dispatch(changePlaylistName(''));
        }
    };
};

export default connect(null, mapDispatchToProps)(Button);