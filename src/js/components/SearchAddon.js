import React from 'react';
import { InputGroup, Glyphicon } from 'react-bootstrap';
import '../../css/SearchAddon.css';
import PropTypes from 'prop-types';
import { fetchSearchResults } from '../actions/searchActions';
import { connect } from 'react-redux';

function SearchAddon({ onClick }) {
    return (
        <InputGroup.Addon className="addon" onClick={onClick}>
            <Glyphicon glyph="search"/>
        </InputGroup.Addon>
    );
}

SearchAddon.propTypes = {
    onClick: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(fetchSearchResults())
    };
};

export default connect(null, mapDispatchToProps)(SearchAddon);