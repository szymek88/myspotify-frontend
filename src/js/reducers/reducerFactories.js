import { SIGNAL_ERROR } from '../actions/genericActions';

export function createReducer(typeName) {
    const initialState = {
        selectedItem: {},
        items: [],
        isFetching: false,
        errorMsg: ''
    };
    return (state = initialState, action) => {
        switch (action.type) {
            case `SELECT_${typeName}`:
                return {
                    ...state,
                    selectedItem: action.selectedItem
                };
            case `REQUEST_${typeName}S`:
                return {
                    ...state,
                    isFetching: true
                };
            case `RECEIVE_${typeName}S`:
                return {
                    ...state,
                    items: action.items,
                    isFetching: false
                };
            case SIGNAL_ERROR:
                return {
                    ...state,
                    isFetching: false,
                    errorMsg: action.errorMsg
                };
            default:
                return state;
        }
    }
}

export function createSingleActionReducer(initialState, actionType) {
    return (state = initialState, action) => {
        return (action.type === actionType) ? action.value : state;
    }
}