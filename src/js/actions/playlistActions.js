import generateActionCreator from './generateActionCreator';
import { fetchData, postData, signalError, deleteData } from './genericActions';
import { showPlaylistSongsSection } from './mainComponentActions';
import { addSong } from './songActions';

export const SELECT_PLAYLIST = 'SELECT_PLAYLIST';
export const REQUEST_PLAYLISTS = 'REQUEST_PLAYLISTS';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const SET_FORM_VISIBLE = 'SET_FORM_VISIBLE';
export const CHANGE_PLAYLIST_NAME = 'CHANGE_PLAYLIST_NAME';
export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';
export const SET_PLAYLIST_SONGS_VISIBLE = 'SET_PLAYLIST_SONGS_VISIBLE';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const SET_DELETE_MODE = 'SET_DELETE_MODE';

export const selectPlaylist = generateActionCreator(SELECT_PLAYLIST, 'selectedItem');
const requestPlaylists = generateActionCreator(REQUEST_PLAYLISTS);
const receivePlaylists = generateActionCreator(RECEIVE_PLAYLISTS, 'items');
export const setFormVisible = generateActionCreator(SET_FORM_VISIBLE, 'isFormVisible');
export const changePlaylistName = generateActionCreator(CHANGE_PLAYLIST_NAME, 'playlistName');
const addPlaylist = generateActionCreator(ADD_PLAYLIST, 'playlistResource');
export const setModalVisible = generateActionCreator(SET_MODAL_VISIBLE, 'isModalVisible');
export const setPlaylistSongsVisible = generateActionCreator(
    SET_PLAYLIST_SONGS_VISIBLE, 'arePlaylistSongsVisible');
const removePlaylist = generateActionCreator(REMOVE_PLAYLIST, 'playlistId');
export const setDeleteMode = generateActionCreator(SET_DELETE_MODE, 'isDeleteMode');

export function fetchPlaylists() {
    return fetchData('/playlists', requestPlaylists, (playlists, dispatch) => {
        dispatch(receivePlaylists(playlists.content));
    });
}

export function createPlaylist(playlistName) {
    const onSuccess = (dispatch, response) => {
        response.json().then(playlistResource => {
            dispatch(addPlaylist(playlistResource));
        });
        dispatch(setFormVisible(false));
        dispatch(changePlaylistName(''));
    };
    const args = {
        url: '/playlists',
        body: `{ "name": "${playlistName}" }`,
        onSuccess,
        onError: signalError
    };
    return postData(args);
}

function addSongToPlaylist(playlistId) {
    return (dispatch, getState) => {
        const songId = getState().songs.selectedItem.song.id;
        const args = {
            url: `/songs/${songId}/${playlistId}`,
            body: '',
            onSuccess: () => {},
            onError: signalError
        };
        dispatch(postData(args));
        dispatch(setModalVisible(false));
        const { arePlaylistSongsVisible, selectedItem } = getState().playlists;
        const selectedPlaylist = selectedItem.playlist;
        const UNSELECTED = -1;
        const selectedPlaylistId = selectedPlaylist !== undefined ?
            selectedPlaylist.id : UNSELECTED;
        if (arePlaylistSongsVisible && playlistId === selectedPlaylistId) {
            dispatch(addSong(getState().songs.selectedItem))
        }
    }
}
export function onPlaylistClick(playlistResource) {
    return (dispatch, getState) => {
        const { isModalVisible, isDeleteMode } = getState().playlists;
        const playlistId = playlistResource.playlist.id;
        if (isModalVisible) {
            dispatch(addSongToPlaylist(playlistId));
        } else if (isDeleteMode) {
            dispatch(deletePlaylist(playlistId));
        } else {
            dispatch(showPlaylistSongsSection(playlistResource));
        }
    }
}

function deletePlaylist(playlistId) {
    return dispatch => {
        const url = `/playlists/${playlistId}`;
        dispatch(deleteData(url));
        dispatch(removePlaylist(playlistId));
        dispatch(setDeleteMode(false));
    }
}