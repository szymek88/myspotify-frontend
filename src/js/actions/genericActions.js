import fetch from 'isomorphic-fetch';
import generateActionCreator from './generateActionCreator';
import { TOKEN_KEY } from '../utils';

export const SIGNAL_ERROR = 'SIGNAL_ERROR';

export const signalError = generateActionCreator(SIGNAL_ERROR, 'errorMsg');

function getAuthHeader() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}

export function fetchData(url, requestData, receiveData) {
    return dispatch => {
        dispatch(requestData());
        return fetch(url,{ headers: getAuthHeader() })
            .then(response => {
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

export function postData({ url, body, onSuccess, onError }) {
    return dispatch => {
        return fetch(url, getRequestValues(body))
            .then(response => {
                if (response.ok) {
                    onSuccess(dispatch, response);
                } else {
                    dispatch(onError(response.statusText));
                }
            });
    }
}

function getRequestValues(body) {
    return {
        method: 'POST',
        headers: { "Content-Type": "application/json",
                    ...getAuthHeader() },
        body
    };
}

export function deleteData(url) {
    return dispatch => {
        const requestValues = {
            method: 'DELETE',
            headers: getAuthHeader()
        };
        return fetch(url, requestValues).then(response => {
            if (!response.ok) {
                dispatch(signalError(response.statusText));
            }
        });
    }
}