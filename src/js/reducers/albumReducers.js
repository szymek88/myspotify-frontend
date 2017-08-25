import { SELECT_ALBUM, REQUEST_ALBUM_SONGS,
    RECEIVE_ALBUM_SONGS } from '../actions/albumActions';
import { SIGNAL_ERROR } from '../actions/genericActions';

const initialState = {
    albumResource: {},
    songs: [],
    isFetching: false,
    errorMsg: ''
};

export function selectedAlbum(state = initialState, action) {
    switch (action.type) {
        case SELECT_ALBUM:
            return {
                ...state,
                albumResource: action.album
            };
        case REQUEST_ALBUM_SONGS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_ALBUM_SONGS:
            return {
                ...state,
                songs: action.songs,
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

