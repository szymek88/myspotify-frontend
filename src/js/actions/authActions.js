import generateActionCreator from './generateActionCreator';
import fetch from 'isomorphic-fetch';
import { TOKEN_KEY } from '../utils';
import { clearSong } from './songActions';
import { showSearchResults, showLoginForm } from './mainComponentActions';

const CHANGE_USERNAME = 'CHANGE_USERNAME';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_PASSWORD_CONFIRMATION = 'CHANGE_PASSWORD_CONFIRMATION';
const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
const LOGOUT = 'LOGOUT';
const SET_SIGNED_UP = 'SET_SIGNED_UP';
const CLEAR_AUTH_STRINGS = 'CLEAR_AUTH_STRINGS';
const SET_SIGNING_UP = 'SET_SIGNING_UP';
const SET_ERROR_MSG = 'SET_ERROR_MSG';

export const changeUsername = generateActionCreator(CHANGE_USERNAME, 'username');
export const changePassword = generateActionCreator(CHANGE_PASSWORD, 'password');
export const changePasswordConfirmation =
    generateActionCreator(CHANGE_PASSWORD_CONFIRMATION, 'passwordConfirmation');
const receiveLogin = generateActionCreator(RECEIVE_LOGIN);
export const setSignedUp = generateActionCreator(SET_SIGNED_UP, 'isSignedUp');
export const clearAuthStrings = generateActionCreator(CLEAR_AUTH_STRINGS);
export const setSigningUp = generateActionCreator(SET_SIGNING_UP, 'isSigningUp');
const setErrorMsg = generateActionCreator(SET_ERROR_MSG, 'errorMsg');

function saveToken(response) {
    const TOKEN_PREFIX = 'Bearer ';
    const authToken = response.headers.get('Authorization')
        .replace(TOKEN_PREFIX, '');
    localStorage.setItem(TOKEN_KEY, authToken);
}

export function login(credentials) {
    return (dispatch, getState) => {
        const onSuccess = (dispatch, response) => {
            saveToken(response);
            dispatch(receiveLogin());
            dispatch(showSearchResults(
                getState().suggestions.searchText));
        };
        const args = {
            credentials,
            validateCredentials: areCredentialsFilled,
            url: '/login',
            onSuccess
        };
        dispatch(postCredentials(args));
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem(TOKEN_KEY);
        dispatch({ type: LOGOUT });
        dispatch(clearSong());
        dispatch(showLoginForm());
    };
}

function areCredentialsFilled({ username, password }, dispatch) {
    if (username === '' || password === '') {
        dispatch(setErrorMsg('Fill all fields.'));
        return false;
    }
    return true;
}

export function signUp(credentials) {
    const validateCredentials = (credentials, dispatch) => {
        if (credentials.password !== credentials.passwordConfirmation) {
            dispatch(setErrorMsg('Passwords are different.'));
            return false;
        }
        return areCredentialsFilled(credentials, dispatch);
    };
    const onSuccess = dispatch => {
        dispatch(setSignedUp(true));
        dispatch(setErrorMsg(''));
    };
    const args = {
        credentials,
        validateCredentials,
        url: '/sign-up',
        onSuccess
    };
    return postCredentials(args);
}

function getRequestValues({ username, password }) {
    return {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: `{ "username": "${username}",` +
        ` "password": "${password}" }`
    };
}

function postCredentials({ credentials, validateCredentials, url, onSuccess }) {
    return dispatch => {
        const areCredentialsValid = validateCredentials(credentials, dispatch);
        if (!areCredentialsValid) {
            return;
        }
        return fetch(url, getRequestValues(credentials))
            .then(response => {
                if (response.ok) {
                    onSuccess(dispatch, response);
                } else {
                    dispatch(setErrorMsg(response.statusText));
                }
            });
    }
}