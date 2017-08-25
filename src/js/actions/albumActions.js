import generateActionCreator from './generateActionCreator';

const SELECT_ALBUM = 'SELECT_ALBUM';
const REQUEST_ALBUMS = 'REQUEST_ALBUMS';
const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const selectAlbum = generateActionCreator(SELECT_ALBUM, 'selectedItem');
export const requestAlbums = generateActionCreator(REQUEST_ALBUMS);
export const receiveAlbums = generateActionCreator(RECEIVE_ALBUMS, 'items');