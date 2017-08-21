import { fetchData } from './genericActions';

export const SEARCH = 'SEARCH';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

function search() {
    return { type: SEARCH };
}

function receiveResults(searchResults) {
    return {
        type: RECEIVE_RESULTS,
        searchResults
    };
}

export function fetchSearchResults() {
    return (dispatch, getState) => {
        const value = getState().suggestions.value;
        const url = '/search?q=' + value.replace(" ", "+");
        dispatch(fetchData(url, search, (results, dispatch) => {
            dispatch(receiveResults(results));
        }));
    };
}
