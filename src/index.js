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
import { SHOW_COMPONENT } from './js/actions/mainComponentActions';
import { SELECT_PAGE } from './js/actions/pageActions';
import { SUBMIT_SEARCH_QUERY } from './js/actions/searchActions';
import SearchResults from './js/components/search/SearchResults';
import playQueue from './js/reducers/playQueueReducer';
import { auth } from './js/reducers/authReducer';
import { isAuthenticated } from './js/utils';
import LoginForm from './js/components/forms/LoginForm';
import playlists from './js/reducers/playlistReducer';
import songs from './js/reducers/songReducer';

const albums = createReducer('ALBUM');
const artists = createReducer('ARTIST');
const mainComponent = createSingleActionReducer(
    isAuthenticated() ? <SearchResults/> : <LoginForm/>, SHOW_COMPONENT);
const activePage = createSingleActionReducer(1, SELECT_PAGE);
const submittedSearchQuery = createSingleActionReducer('', SUBMIT_SEARCH_QUERY);

const rootReducer = combineReducers({
    songs,
    albums,
    artists,
    playlists,
    suggestions,
    mainComponent,
    activePage,
    submittedSearchQuery,
    playQueue,
    auth
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
