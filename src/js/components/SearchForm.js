import React from 'react';
import Autosuggest from 'react-autosuggest';
import { updateValue, fetchSuggestions, clearSuggestions }
    from '../actions/suggestionsActions';
import { connect } from 'react-redux';
import '../../css/SearchForm.css';

function SearchForm({ value, suggestions, isFetching, onChange,
    onSuggestionsFetchRequested, onSuggestionsClearRequested }) {
    const inputProps = {
        placeholder: "Search for songs, albums, and artists",
        value,
        onChange
    };
    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={ suggestion => suggestion }
            renderSuggestion={ suggestion => <span>{ suggestion }</span> }
            inputProps={inputProps}
            multiSection={true}
            renderSectionTitle={ section => <strong>{ section.category }</strong>}
            getSectionSuggestions={ section => section.suggestions }/>
    );
}

function transformSuggestions(suggestions) {
    let transformedSuggestions = [];
    transformedSuggestions.push({ category: 'Songs', suggestions: suggestions.songSuggestions });
    transformedSuggestions.push({ category: 'Albums', suggestions: suggestions.albumSuggestions });
    transformedSuggestions.push({ category: 'Artists', suggestions: suggestions.artistSuggestions });
    return transformedSuggestions.filter(section => section.suggestions.length > 0);
}

const mapStateToProps = (state) => {
    const { value, suggestions, isFetching } = state.suggestions;

    return {
        value,
        suggestions: transformSuggestions(suggestions),
        isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event, { newValue }) => dispatch(updateValue(newValue)),
        onSuggestionsFetchRequested: value => dispatch(fetchSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(clearSuggestions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);