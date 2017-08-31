import { SET_PLAYLIST, INCREMENT_INDEX } from '../actions/playlistActions';

const initialState = {
    songs: [],
    index: 0,
};

export default function playlist(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYLIST:
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
        default:
            return state;
    }
}
