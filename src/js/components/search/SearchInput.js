import React from 'react';
import Autosuggest from 'react-autosuggest';
import { updateSearchText, fetchSuggestions, clearSuggestions }
    from '../../actions/suggestionsActions';
import { connect } from 'react-redux';
import '../../../css/SearchInput.css';
import { InputGroup } from 'react-bootstrap';
import SearchAddon from './SearchAddon';
import { showSearchResults } from '../../actions/mainComponentActions';

function SearchInput(props) {
    const inputProps = {
        placeholder: "Search for songs, albums, and artists...",
        value: props.searchText,
        onChange: props.onChange,
        onKeyDown: event => props.onKeyDown(event, props.searchText)
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
            onSuggestionSelected={() => props.onSuggestionSelected(props.searchText)}
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
    const { searchText, suggestions, isFetching } = state.suggestions;
    return {
        searchText,
        suggestions: transformSuggestions(suggestions),
        isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event, { newValue }) => dispatch(updateSearchText(newValue)),
        onSuggestionsFetchRequested: ({ value }) => dispatch(fetchSuggestions(value)),
        onSuggestionsClearRequested: () => dispatch(clearSuggestions()),
        onSuggestionSelected: searchText => {
            dispatch(showSearchResults(searchText));
        },
        onKeyDown: (event, searchText) => onKeyDown(event, dispatch, searchText)
    };
};

function onKeyDown(event, dispatch, searchText) {
    if (event.key === 'Enter') {
        dispatch(clearSuggestions());
        dispatch(showSearchResults(searchText));
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);