import { UPDATE_VALUE, CLEAR_SUGGESTIONS,
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS } from '../actions/suggestionsActions'

const initialSuggestions = {
    songSuggestions: [],
    albumSuggestions: [],
    artistSuggestions: []
};

const initialState = {
    value: '',
    suggestions: initialSuggestions,
    isFetching: false
};

export function suggestions(state = initialState, action) {
    switch (action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.value
            };
        case CLEAR_SUGGESTIONS:
            return {
                ...state,
                suggestions: initialSuggestions
            };
        case REQUEST_SUGGESTIONS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SUGGESTIONS:
            return receiveSuggestions(state, action);
        default:
            return state;
    }
}

function receiveSuggestions(state, action) {
    const isValueChanged = action.value !== state.value;
    if (isValueChanged) {
        return {
            ...state,
            isFetching: false
        };
    }

    return {
        ...state,
        suggestions: action.suggestions,
        isFetching: false
    };
}