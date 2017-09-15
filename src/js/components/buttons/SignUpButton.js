import { connect } from 'react-redux';
import FormButton from './FormButton';
import { signUp } from '../../actions/authActions';

const mapStateToProps = state => {
    return {
        credentials: state.auth.credentials,
        text: 'Sign Up'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: credentials => dispatch(signUp(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormButton);