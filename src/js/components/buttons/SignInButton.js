import { connect } from 'react-redux';
import FormButton from './FormButton';
import { login } from '../../actions/authActions';

const mapStateToProps = state => {
    return {
        credentials: state.auth.credentials,
        text: 'Sign In'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: credentials => dispatch(login(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormButton);
