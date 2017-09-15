import React from 'react';
import { InputGroup, Glyphicon } from 'react-bootstrap';
import '../../../css/SearchAddon.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showSearchResults } from '../../actions/mainComponentActions';

function SearchAddon({ onClick, searchText }) {
    return (
        <InputGroup.Addon className="addon" onClick={() => onClick(searchText)}>
            <Glyphicon glyph="search"/>
        </InputGroup.Addon>
    );
}

SearchAddon.propTypes = {
    onClick: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        searchText: state.suggestions.searchText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: searchText => {
            dispatch(showSearchResults(searchText));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAddon);