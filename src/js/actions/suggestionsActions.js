import { fetchData } from './genericActions';

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

export function fetchSuggestions(value) {
    const url = '/suggest?q=' + value.replace(" ", "+");
    return fetchData(url, requestSuggestions, (suggestions, dispatch) => {
        dispatch(receiveSuggestions(suggestions, value));
    });
}
