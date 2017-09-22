import { setDeleteMode, setFormVisible } from '../../actions/playlistActions';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(setDeleteMode(true));
            dispatch(setFormVisible(false));
        }
    }
};

export default connect(null, mapDispatchToProps)(Button);