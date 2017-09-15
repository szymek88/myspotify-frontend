import { fetchData } from './genericActions';
import generateActionCreator from './generateActionCreator';

const SELECT_SONG = 'SELECT_SONG';
const REQUEST_SONGS = 'REQUEST_SONGS';
const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const selectSong = generateActionCreator(SELECT_SONG, 'selectedItem');
export const requestSongs = generateActionCreator(REQUEST_SONGS);
export const receiveSongs = generateActionCreator(RECEIVE_SONGS, 'items');

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
