import generateActionCreator from './generateActionCreator';
import { selectAlbum } from './albumActions';
import { submitSearchQuery } from './searchActions';
import { selectArtist } from './artistActions';
import SearchResults from '../components/search/SearchResults';
import AlbumSection from '../components/sections/AlbumSection';
import ArtistSection from '../components/sections/ArtistSection';
import React from 'react';

export const SHOW_SECTION = 'SHOW_SECTION';

const showSection = generateActionCreator(SHOW_SECTION, 'value');

export function showSearchResults() {
    return dispatch => {
        dispatch(submitSearchQuery());
        dispatch(showSection(<SearchResults/>));
    }
}

export function showAlbumSection(album) {
    return dispatch => {
        dispatch(selectAlbum(album));
        dispatch(showSection(<AlbumSection/>));
    }
}

export function showArtistSection(artist) {
    return dispatch => {
        dispatch(selectArtist(artist));
        dispatch(showSection(<ArtistSection/>));
    }
}