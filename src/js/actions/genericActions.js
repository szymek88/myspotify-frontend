import fetch from 'isomorphic-fetch';
import generateActionCreator from './generateActionCreator';

export const SIGNAL_ERROR = 'SIGNAL_ERROR';

const signalError = generateActionCreator(SIGNAL_ERROR, 'errorMsg');

export function fetchData(url, requestData, receiveData) {
    return dispatch => {
        dispatch(requestData());
        return fetch(url).then(response => {
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