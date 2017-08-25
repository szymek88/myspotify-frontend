import { PAGE_SIZE } from './lists/Songs';
import { selectPage } from '../actions/pageActions';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListPagination extends Component {

    componentDidMount() {
        this.props.dispatch(selectPage(1));
    }

    render() {
        const { items, activePage, onSelect } = this.props;
        return <Pagination items={ items }
                           activePage={ activePage }
                           onSelect={ onSelect }/>
    }
}

ListPagination.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        items: countPages(state.songs.items.length),
        activePage: state.activePage
    };
};

function countPages(songsLength) {
    const fullPagesCount = songsLength / PAGE_SIZE;
    return (songsLength % PAGE_SIZE === 0) ? fullPagesCount : fullPagesCount + 1;
}

const mapDispatchToProps = dispatch => {
    return {
        onSelect: page => dispatch(selectPage(page)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPagination);