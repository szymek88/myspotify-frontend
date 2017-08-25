import generateActionCreator from './generateActionCreator';

export const SELECT_PAGE = 'SELECT_PAGE';

export const selectPage = generateActionCreator(SELECT_PAGE, 'value');
