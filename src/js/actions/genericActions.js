import fetch from 'isomorphic-fetch';
import generateActionCreator from './generateActionCreator';
import { TOKEN_KEY } from '../utils';

export const SIGNAL_ERROR = 'SIGNAL_ERROR';

export const signalError = generateActionCreator(SIGNAL_ERROR, 'errorMsg');

function getAuthHeader(isAuthenticated) {
    const token = localStorage.getItem(TOKEN_KEY);
    return isAuthenticated && token ?
        { headers: { 'Authorization': `Bearer ${token}` } } : {};
}

export function fetchData(url, requestData, receiveData) {
    return (dispatch, getState) => {
        dispatch(requestData());
        const authHeader = getAuthHeader(getState().auth.isAuthenticated);
        return fetch(url, authHeader).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    receiveData(json, dispatch);
                });
            } else {
                dispatch(signalError(response.statusText));
            }
        });
    };
}