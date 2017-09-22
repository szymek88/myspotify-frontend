import generateActionCreator from './generateActionCreator';
import { TOKEN_KEY } from '../utils';
import { clearSong } from './songActions';
import { showLoginForm, showComponent } from './mainComponentActions';
import { postData } from './genericActions';
import PlaylistsSection from '../components/sections/PlaylistsSection';
import React from 'react';

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
        if (areCredentialsEmpty(credentials)) {
            dispatch(setErrorMsg('Fill all fields.'));
            return;
        }
        const onSuccess = (dispatch, response) => {
            saveToken(response);
            dispatch(receiveLogin());
            dispatch(showComponent(<PlaylistsSection/>));
        };
        const args = {
            url: '/login',
            body: getCredentialsBody(credentials),
            onSuccess,
            setErrorMsg
        };
        dispatch(postData(args));
    }
}

function getCredentialsBody({ username, password }) {
    return `{ "username": "${username}",` +
        ` "password": "${password}" }`
}

export function logout() {
    return dispatch => {
        localStorage.removeItem(TOKEN_KEY);
        dispatch({ type: LOGOUT });
        dispatch(clearSong());
        dispatch(showLoginForm());
    };
}

function areCredentialsEmpty({ username, password }) {
    return username === '' || password === '';
}

function arePasswordsEqual({ password, passwordConfirmation }) {
    return password === passwordConfirmation;
}

export function signUp(credentials) {
    return dispatch => {
        const areCredentialsValid = validateCredentials(credentials, dispatch);
        if (!areCredentialsValid) {
            return;
        }
        const onSuccess = dispatch => {
            dispatch(setSignedUp(true));
            dispatch(setErrorMsg(''));
        };
        const args = {
            url: '/sign-up',
            body: getCredentialsBody(credentials),
            onSuccess,
            setErrorMsg
        };
        dispatch(postData(args));
    }
}

function validateCredentials(credentials, dispatch) {
    if (areCredentialsEmpty(credentials)) {
        dispatch(setErrorMsg('Fill all fields.'));
        return false;
    }
    if (!arePasswordsEqual(credentials)) {
        dispatch(setErrorMsg('Passwords are different.'));
        return false;
    }
    return true;
}