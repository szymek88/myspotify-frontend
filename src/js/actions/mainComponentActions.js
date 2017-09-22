import generateActionCreator from './generateActionCreator';
import { selectAlbum } from './albumActions';
import { submitSearchQuery } from './searchActions';
import { selectArtist } from './artistActions';
import SearchResults from '../components/search/SearchResults';
import AlbumSection from '../components/sections/AlbumSection';
import ArtistSection from '../components/sections/ArtistSection';
import React from 'react';
import { clearAuthStrings } from './authActions';
import SignUpForm from '../components/forms/SignUpForm';
import LoginForm from '../components/forms/LoginForm';
import { setSignedUp } from './authActions';
import PlaylistSongsSection from '../components/sections/PlaylistSongsSection';
import { selectPlaylist } from './playlistActions';

export const SHOW_COMPONENT = 'SHOW_COMPONENT';

export const showComponent = generateActionCreator(SHOW_COMPONENT, 'value');

export function showSearchResults(searchText) {
    return dispatch => {
        dispatch(submitSearchQuery(searchText));
        dispatch(showComponent(<SearchResults/>));
    }
}

export function showAlbumSection(album) {
    return dispatch => {
        dispatch(selectAlbum(album));
        dispatch(showComponent(<AlbumSection/>));
    }
}

export function showArtistSection(artist) {
    return dispatch => {
        dispatch(selectArtist(artist));
        dispatch(showComponent(<ArtistSection/>));
    }
}

export function showSignUpForm() {
    return dispatch => {
        dispatch(clearAuthStrings());
        dispatch(setSignedUp(false));
        dispatch(showComponent(<SignUpForm/>));
    }
}

export function showLoginForm() {
    return dispatch => {
        dispatch(clearAuthStrings());
        dispatch(showComponent(<LoginForm/>));
    }
}

export function showPlaylistSongsSection(playlist) {
    return dispatch => {
        dispatch(selectPlaylist(playlist));
        dispatch(showComponent(<PlaylistSongsSection/>));
    }
}