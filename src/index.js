import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { fetchSongs } from './js/actions';
import rootReducer from './js/reducers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

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
