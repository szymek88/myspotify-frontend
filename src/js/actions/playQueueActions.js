import generateActionCreator from './generateActionCreator';
import { selectSong } from './songActions';

export const SET_QUEUE = 'SET_QUEUE';
export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';

const incrementIndex = generateActionCreator(INCREMENT_INDEX);
const decrementIndex = generateActionCreator(DECREMENT_INDEX);

export function nextSong() {
    return (dispatch, getState) => {
        const { songs, index } = getState().playQueue;
        if (index < songs.length - 1) {
            dispatch(incrementIndex());
            dispatch(selectSong(songs[index + 1]));
        }
    };
}

export function previousSong() {
    return (dispatch, getState) => {
        const { songs, index } = getState().playQueue;
        if (index > 0) {
            dispatch(decrementIndex());
            dispatch(selectSong(songs[index - 1]));
        }
    };
}

export function setQueue() {
    return (dispatch, getState) => {
        dispatch({
            type: SET_QUEUE,
            songs: getState().songs.items
        });
        dispatch(selectSong(getState().playQueue.songs[0]));
    };
}