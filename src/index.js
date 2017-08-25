import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { selectedSong } from './js/reducers/songReducers';
import { suggestions } from './js/reducers/suggestionsReducer';
import { searchResults } from './js/reducers/searchReducer';
import { centralSection } from './js/reducers/centralSectionReducers';
import { selectedAlbum } from './js/reducers/albumReducers';
import './css/index.css'
import { activePage } from './js/reducers/pageReducers';

const rootReducer = combineReducers({
    selectedSong,
    selectedAlbum,
    suggestions,
    searchResults,
    centralSection,
    activePage
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
