import generateActionCreator from './generateActionCreator';

const SELECT_ARTIST = 'SELECT_ARTIST';
const REQUEST_ARTISTS = 'REQUEST_ARTISTS';
const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';

export const selectArtist = generateActionCreator(SELECT_ARTIST, 'selectedItem');
export const requestArtists = generateActionCreator(REQUEST_ARTISTS);
export const receiveArtists = generateActionCreator(RECEIVE_ARTISTS, 'items');
