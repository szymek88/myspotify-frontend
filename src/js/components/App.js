import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import SearchResults from './SearchResults';
import AudioPlayer from './AudioPlayer';
import { UNSELECTED } from '../reducers/songReducers';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ selectedSongId }) {
    const isAudioPlayerVisible = selectedSongId !== UNSELECTED;
    return (
        <Grid fluid={true}>
            <Row><NavigationBar/></Row>
            <Row>
                <Col md={4} mdOffset={4} sm={6}><SearchResults/></Col>
                <Col md={4} sm={6}>{ isAudioPlayerVisible && <AudioPlayer/> }</Col>
            </Row>
        </Grid>
    );
}

App.propTypes = {
    selectedSongId: PropTypes.number.isRequired
};

const mapStateToProps = state => {
    return {
        selectedSongId: state.selectedSongId
    };
};

export default connect(mapStateToProps)(App);
