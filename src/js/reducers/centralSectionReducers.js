import { CentralSections } from '../CentralSections';
import { SHOW_SECTION } from '../actions/centralSectionActions';

export function centralSection(state = CentralSections.SEARCH_RESULTS, action) {
    return (action.type === SHOW_SECTION) ? action.section : state;
}
