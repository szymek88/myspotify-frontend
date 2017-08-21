import { fetchData } from './genericActions';

export const SELECT_SONG = 'SELECT_SONG';
export const REQUEST_SONGS = 'REQUEST_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export function selectSong(songId) {
    return {
        type: SELECT_SONG,
        songId
    };
}

function requestSongs() {
    return { type: REQUEST_SONGS };
}

function receiveSongs(json) {
    return {
        type: RECEIVE_SONGS,
        songs: json._embedded.songResourceList
    };
}

export function fetchSongs() {
    return fetchData('/songs', requestSongs, (songs, dispatch) => {
        dispatch(receiveSongs(songs));
    });
}
