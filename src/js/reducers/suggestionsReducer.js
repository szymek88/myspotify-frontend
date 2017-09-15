import { UPDATE_SEARCH_TEXT, CLEAR_SUGGESTIONS,
    RECEIVE_SUGGESTIONS } from '../actions/suggestionsActions';

const initialSuggestions = {
    songSuggestions: [],
    albumSuggestions: [],
    artistSuggestions: []
};

const initialState = {
    searchText: '',
    suggestions: initialSuggestions
};

export function suggestions(state = initialState, action) {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.searchText
            };
        case CLEAR_SUGGESTIONS:
            return {
                ...state,
                suggestions: initialSuggestions
            };
        case RECEIVE_SUGGESTIONS:
            return receiveSuggestions(state, action);
        default:
            return state;
    }
}

function receiveSuggestions(state, action) {
    const isSearchTextChanged = action.searchText !== state.searchText;
    if (!isSearchTextChanged) {
        return {
            ...state,
            suggestions: action.suggestions
        };
    }
    return state;
}