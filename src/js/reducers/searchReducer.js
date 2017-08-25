import { SEARCH, RECEIVE_RESULTS } from '../actions/searchActions';
import { SIGNAL_ERROR } from '../actions/genericActions';

const initialSearchResults = {
    songs: [],
    albums: [],
    artists: []
};

const initialState = {
    results: initialSearchResults,
    isFetching: false,
    errorMsg: ''
};

export function searchResults(state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_RESULTS:
            return {
                ...state,
                results: transformResults(action.searchResults),
                isFetching: false
            };
        case SIGNAL_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.errorMsg
            };
        default:
            return state;
    }
}

function transformResults(results) {
    return {
        songs: results.songsResources.content,
        albums: results.albumsResources.content,
        artists: results.artistsResources.content
    };
}
