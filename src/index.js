import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { fetchSongs } from './js/actions/songActions';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { selectedSongId, songs } from './js/reducers/songReducers';
import { suggestions } from './js/reducers/suggestionsReducers';

const rootReducer = combineReducers({
    selectedSongId,
    songs,
    suggestions
});
const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.dispatch(fetchSongs());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
