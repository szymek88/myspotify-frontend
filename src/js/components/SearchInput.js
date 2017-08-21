import React from 'react';
import Autosuggest from 'react-autosuggest';
import { updateValue, fetchSuggestions, clearSuggestions }
    from '../actions/suggestionsActions';
import { connect } from 'react-redux';
import '../../css/SearchInput.css';
import { fetchSearchResults } from '../actions/searchActions';
import { InputGroup } from 'react-bootstrap';
import SearchAddon from './SearchAddon';

function SearchInput(props) {
    const inputProps = {
        placeholder: "Search for songs, albums, and artists...",
        value: props.value,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown
    };

    const renderInputComponent = inputProps => (
        <div>
            <InputGroup>
                <input {...inputProps} className="form-control"/>
                <SearchAddon/>
            </InputGroup>
        </div>
    );

    return (
        <Autosuggest
            suggestions={props.suggestions}
            onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={props.onSuggestionsClearRequested}
            getSuggestionValue={ suggestion => suggestion }
            renderSuggestion={ suggestion => <span>{ suggestion }</span> }
            inputProps={inputProps}
            multiSection={true}
            renderSectionTitle={ section => <strong>{ section.category }</strong>}
            getSectionSuggestions={ section => section.suggestions }
            onSuggestionSelected={props.onSuggestionSelected}
            renderInputComponent={renderInputComponent}
        />
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
        onSuggestionsFetchRequested: ({ value }) => dispatch(fetchSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(clearSuggestions()),
        onSuggestionSelected: (event) => dispatch(fetchSearchResults()),
        onKeyDown: event => onKeyDown(event, dispatch)
    };
};

function onKeyDown(event, dispatch) {
    if (event.key === 'Enter') {
        dispatch(fetchSearchResults());
        dispatch(clearSuggestions());
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);