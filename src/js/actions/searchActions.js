import { fetchData } from './genericActions';
import { requestSongs, receiveSongs } from './songActions';
import { requestAlbums, receiveAlbums } from './albumActions';
import { requestArtists, receiveArtists } from './artistActions';
import generateActionCreator from './generateActionCreator';

export const SUBMIT_SEARCH_QUERY = 'SUBMIT_SEARCH_QUERY';

export const submitSearchQuery = generateActionCreator(SUBMIT_SEARCH_QUERY, 'value');

export function search(query) {
    const url = '/search?q=' + query.replace(" ", "+");
    return fetchData(url, beginSearching, (results, dispatch) => {
        dispatch(finishSearching(results));
    });
}

function beginSearching() {
    return dispatch => {
        dispatch(requestSongs());
        dispatch(requestAlbums());
        dispatch(requestArtists());
    };
}

function finishSearching(results) {
    return dispatch => {
        dispatch(receiveSongs(results.songsResources.content));
        dispatch(receiveAlbums(results.albumsResources.content));
        dispatch(receiveArtists(results.artistsResources.content));
    };
}
