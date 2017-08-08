import { combineReducers } from 'redux';
import { SELECT_SONG, REQUEST_SONGS,
    RECEIVE_SONGS, SIGNAL_ERROR } from './actions';

export const UNSELECTED = -1;

function selectedSongId(state = UNSELECTED, action) {
    return (action.type === SELECT_SONG) ? action.songId : state;
}

function songs(state = {
    songResources: [],
    isFetching: false,
    errorMsg: ''
}, action) {
    switch (action.type) {
        case REQUEST_SONGS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_SONGS:
            return {
                ...state,
                songResources: action.songs,
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

const rootReducer = combineReducers({
    songs,
    selectedSongId
});

export default rootReducer;
