import { setPlaylist } from '../actions/playlistActions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(setPlaylist())
    };
};

export default connect(null, mapDispatchToProps)(Button);
