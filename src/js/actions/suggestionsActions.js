import { fetchData } from './genericActions';
import generateActionCreator from './generateActionCreator';

export const UPDATE_VALUE = 'UPDATE_VALUE';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';

export const updateValue = generateActionCreator(UPDATE_VALUE, 'value');
export const clearSuggestions = generateActionCreator(CLEAR_SUGGESTIONS);
const requestSuggestions = generateActionCreator(REQUEST_SUGGESTIONS);
const receiveSuggestions = generateActionCreator(
    RECEIVE_SUGGESTIONS, 'suggestions', 'value');

export function fetchSuggestions(value) {
    const url = '/suggest?q=' + value.replace(" ", "+");
    return fetchData(url, requestSuggestions, (suggestions, dispatch) => {
        dispatch(receiveSuggestions(suggestions, value));
    });
}
