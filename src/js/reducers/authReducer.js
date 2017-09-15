import { isAuthenticated } from '../utils';

const initialState = {
    credentials: { username: '', password: '', passwordConfirmation: '' },
    isAuthenticated: isAuthenticated(),
    isSignedUp: false,
    isSigningUp: false,
    errorMsg: ''
};

function changeUsername(state, action) {
    return {
        ...state,
        credentials: {
            ...state.credentials,
            username: action.username
        }
    };
}

function changePassword(state, action) {
    return {
        ...state,
        credentials: {
            ...state.credentials,
            password: action.password
        }
    };
}

function changePasswordConfirmation(state, action) {
    return {
        ...state,
        credentials: {
            ...state.credentials,
            passwordConfirmation: action.passwordConfirmation
        }
    };
}

function receiveLogin(state) {
    return {
        ...state,
        isAuthenticated: true
    };
}

function logout(state) {
    return {
        ...state,
        isAuthenticated: false
    };
}

function setSignedUp(state, action) {
    return {
        ...state,
        isSignedUp: action.isSignedUp
    };
}

function serErrorMsg(state, action) {
    return {
        ...state,
        errorMsg: action.errorMsg
    };
}

function clearAuthStrings(state) {
    return {
        ...state,
        credentials: {
            username: '',
            password: '',
            passwordConfirmation: ''
        },
        errorMsg: ''
    };
}

function setSigningUp(state, action) {
    return {
        ...state,
        isSigningUp: action.isSigningUp
    }
}

export const auth = createReducer(initialState, {
    'CHANGE_USERNAME': changeUsername,
    'CHANGE_PASSWORD': changePassword,
    'CHANGE_PASSWORD_CONFIRMATION': changePasswordConfirmation,
    'RECEIVE_LOGIN': receiveLogin,
    'LOGOUT': logout,
    'SET_SIGNED_UP': setSignedUp,
    'SET_ERROR_MSG': serErrorMsg,
    'CLEAR_AUTH_STRINGS': clearAuthStrings,
    'SET_SIGNING_UP': setSigningUp
});

function createReducer(initialState, handlers) {
    return (state = initialState, action) =>
        handlers.hasOwnProperty(action.type) ?
            handlers[action.type](state, action) : state
}