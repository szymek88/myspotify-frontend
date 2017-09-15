import { fetchData } from './genericActions';
import generateActionCreator from './generateActionCreator';

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS';
export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';

export const updateSearchText = generateActionCreator(UPDATE_SEARCH_TEXT, 'searchText');
export const clearSuggestions = generateActionCreator(CLEAR_SUGGESTIONS);
const receiveSuggestions = generateActionCreator(
    RECEIVE_SUGGESTIONS, 'suggestions', 'searchText');

export function fetchSuggestions(searchText) {
    const url = '/suggest?q=' + searchText.replace(" ", "+");
    return fetchData(url, () => { return { type: '' } }, (suggestions, dispatch) => {
        dispatch(receiveSuggestions(suggestions, searchText));
    });
}
