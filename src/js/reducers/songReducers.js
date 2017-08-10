import { SELECT_SONG, REQUEST_SONGS,
    RECEIVE_SONGS, SIGNAL_ERROR } from '../actions/songActions';

export const UNSELECTED = -1;

export function selectedSongId(state = UNSELECTED, action) {
    return (action.type === SELECT_SONG) ? action.songId : state;
}

const initialState = {
    songResources: [],
    isFetching: false,
    errorMsg: ''
};

export function songs(state = initialState, action) {
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
