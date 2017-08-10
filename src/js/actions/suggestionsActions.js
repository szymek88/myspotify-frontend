import fetch from 'isomorphic-fetch';

export const UPDATE_VALUE = 'UPDATE_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';

export function updateValue(value) {
    return {
        type: UPDATE_VALUE,
        value
    };
}

export function clearSuggestions() {
    return {
        type: CLEAR_SUGGESTIONS
    };
}

function requestSuggestions() {
    return {
        type: REQUEST_SUGGESTIONS
    };
}

function receiveSuggestions(suggestions, value) {
    return {
        type: RECEIVE_SUGGESTIONS,
        suggestions,
        value
    };
}

export function fetchSuggestions(query) {
    const formattedValue = query.value.replace(" ", "+");
    return dispatch => {
        dispatch(requestSuggestions());
        return fetch('/suggest?q=' + formattedValue).then(response => {
            response.json().then(suggestions => {
                dispatch(receiveSuggestions(suggestions, query.value))
            });
        });
    };
}
