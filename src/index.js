import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { suggestions } from './js/reducers/suggestionsReducer';
import './css/index.css'
import { createReducer, createSingleActionReducer } from './js/reducers/reducerFactories';
import { SHOW_SECTION } from './js/actions/centralSectionActions';
import { SELECT_PAGE } from './js/actions/pageActions';
import { SUBMIT_SEARCH_QUERY } from './js/actions/searchActions';
import SearchResults from './js/components/SearchResults';
import playlist from './js/reducers/playlistReducer';

const songs = createReducer('SONG');
const albums = createReducer('ALBUM');
const artists = createReducer('ARTIST');
const centralComponent = createSingleActionReducer(<SearchResults/>, SHOW_SECTION);
const activePage = createSingleActionReducer(1, SELECT_PAGE);
const submittedSearchQuery = createSingleActionReducer('', SUBMIT_SEARCH_QUERY);

const rootReducer = combineReducers({
    songs,
    albums,
    artists,
    suggestions,
    centralComponent,
    activePage,
    submittedSearchQuery,
    playlist
});
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
