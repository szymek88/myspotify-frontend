import { SET_QUEUE, INCREMENT_INDEX,
    DECREMENT_INDEX } from '../actions/playQueueActions';

const initialState = {
    songs: [],
    index: 0,
};

export default function playQueue(state = initialState, action) {
    switch (action.type) {
        case SET_QUEUE:
            return {
                ...state,
                songs: action.songs,
                index: 0
            };
        case INCREMENT_INDEX:
            return {
                ...state,
                index: state.index + 1
            };
        case DECREMENT_INDEX:
            return {
                ...state,
                index: state.index - 1
            };
        default:
            return state;
    }
}
