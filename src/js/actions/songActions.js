import { fetchData, deleteData } from './genericActions';
import generateActionCreator from './generateActionCreator';
import { setDeleteMode } from './playlistActions';

const SELECT_SONG = 'SELECT_SONG';
const REQUEST_SONGS = 'REQUEST_SONGS';
const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

export const selectSong = generateActionCreator(SELECT_SONG, 'selectedItem');
export const requestSongs = generateActionCreator(REQUEST_SONGS);
export const receiveSongs = generateActionCreator(RECEIVE_SONGS, 'items');
export const addSong = generateActionCreator(ADD_SONG, 'song');
const removeSong = generateActionCreator(REMOVE_SONG, 'songId');

export function fetchSongs(url) {
    return fetchData(url, requestSongs, (songs, dispatch) => {
        dispatch(receiveSongs(songs.content));
    });
}

export function clearSong() {
    return {
        type: SELECT_SONG,
        selectedItem: {}
    }
}

function removeSongFromPlaylist(songId) {
    return (dispatch, getState) => {
        const playlistId = getState().playlists.selectedItem.playlist.id;
        const url = `/songs/${songId}/${playlistId}`;
        dispatch(deleteData(url));
        dispatch(removeSong(songId));
        dispatch(setDeleteMode(false));
    }
}
export function onSongClick(songResource) {
    return (dispatch, getState) => {
        const isDeleteMode = getState().playlists.isDeleteMode;
        const songId = songResource.song.id;
        if (isDeleteMode) {
            dispatch(removeSongFromPlaylist(songId));
        } else {
            dispatch(selectSong(songResource));
        }
    }
}