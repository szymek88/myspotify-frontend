import fetch from 'isomorphic-fetch';

export const SELECT_SONG = 'SELECT_SONG';
export const REQUEST_SONGS = 'REQUEST_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const SIGNAL_ERROR = 'SIGNAL_ERROR';

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

function signalError(errorMsg) {
    return {
        type: SIGNAL_ERROR,
        errorMsg
    };
}

export function fetchSongs() {
    return (dispatch) => {
        dispatch(requestSongs());
        return fetch('/songs').then(response => {
                if (response.ok) {
                    response.json().then(json => dispatch(receiveSongs(json)));
                } else {
                    dispatch(signalError(response.statusText));
                }
            });
    };
}
