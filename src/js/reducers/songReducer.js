import { genericInitialState, createReducer } from './reducerFactories';
import { ADD_SONG, REMOVE_SONG } from '../actions/songActions';

const partialReducer = createReducer('SONG');

export default function songs(state = genericInitialState, action) {
    if (action.type === ADD_SONG) {
        return {
            ...state,
            items: state.items.concat(action.song)
        };
    } else if (action.type === REMOVE_SONG) {
        return {
            ...state,
            items: state.items.filter(s => s.song.id !== action.songId)
        };
    }
    return partialReducer(state, action);
}
