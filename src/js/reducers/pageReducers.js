import { SELECT_PAGE } from '../actions/pageActions';

export function activePage(state = 1, action) {
    return (action.type === SELECT_PAGE) ? action.page : state;
}
