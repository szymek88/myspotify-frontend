import { fetchData } from './genericActions';

export const SELECT_ALBUM = 'SELECT_ALBUM';
export const REQUEST_ALBUM_SONGS = 'REQUEST_ALBUM_SONGS';
export const RECEIVE_ALBUM_SONGS = 'RECEIVE_ALBUM_SONGS';

export function selectAlbum(album) {
    return {
        type: SELECT_ALBUM,
        album
    };
}

function requestAlbumSongs() {
    return {
        type: REQUEST_ALBUM_SONGS
    };
}

function receiveAlbumSongs(songs) {
    return {
        type: RECEIVE_ALBUM_SONGS,
        songs
    };
}

export function fetchAlbumSongs(albumResource) {
    const url = albumResource.links.find(link => link.rel === 'songs').href;
    return fetchData(url, requestAlbumSongs, (songs, dispatch) => {
        dispatch(receiveAlbumSongs(songs.content));
    });
}