import { genericInitialState, createReducer } from './reducerFactories';
import { SELECT_PLAYLIST, REQUEST_PLAYLISTS, RECEIVE_PLAYLISTS,
    SET_FORM_VISIBLE, CHANGE_PLAYLIST_NAME, ADD_PLAYLIST,
    SET_MODAL_VISIBLE, SET_PLAYLIST_SONGS_VISIBLE, REMOVE_PLAYLIST,
    SET_DELETE_MODE } from '../actions/playlistActions';
import { SIGNAL_ERROR } from '../actions/genericActions';

const initialState = {
    ...genericInitialState,
    isFormVisible: false,
    playlistName: '',
    isModalVisible: false,
    arePlaylistSongsVisible: false,
    isDeleteMode: false
};

const partialReducer = createReducer('PLAYLIST');

// TODO: refactor
export default function playlists(state = initialState, action) {
    switch (action.type) {
        case SELECT_PLAYLIST:
        case REQUEST_PLAYLISTS:
        case RECEIVE_PLAYLISTS:
        case SIGNAL_ERROR:
            return partialReducer(state, action);
        case SET_FORM_VISIBLE:
            return {
                ...state,
                isFormVisible: action.isFormVisible
            };
        case CHANGE_PLAYLIST_NAME:
            return {
                ...state,
                playlistName: action.playlistName
            };
        case ADD_PLAYLIST:
            return {
                ...state,
                items: state.items.concat(action.playlistResource)
            };
        case SET_MODAL_VISIBLE:
            return {
                ...state,
                isModalVisible: action.isModalVisible
            };
        case SET_PLAYLIST_SONGS_VISIBLE:
            return {
                ...state,
                arePlaylistSongsVisible: action.arePlaylistSongsVisible
            };
        case REMOVE_PLAYLIST:
            return {
                ...state,
                items: state.items.filter(p => p.playlist.id !== action.playlistId)
            };
        case SET_DELETE_MODE:
            return {
                ...state,
                isDeleteMode: action.isDeleteMode
            };
        default:
            return state;
    }
}
