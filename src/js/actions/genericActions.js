import fetch from 'isomorphic-fetch';

export const SIGNAL_ERROR = 'SIGNAL_ERROR';

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

export function signalError(errorMsg) {
    return {
        type: SIGNAL_ERROR,
        errorMsg
    };
}
