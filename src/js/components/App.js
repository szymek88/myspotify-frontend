import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import SearchResults from './SearchResults';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CentralSections } from '../CentralSections';
import AlbumSection from './AlbumSection';

function App({ selectedSong, centralSection }) {
    const isAudioPlayerVisible = selectedSong.hasOwnProperty("song");
    return (
        <Grid fluid={true}>
            <Row><NavigationBar/></Row>
            <Row>
                <Col md={6} mdOffset={2}>
                    { centralSection === CentralSections.ALBUM_SECTION ? <AlbumSection/> : <SearchResults/> }
                </Col>
                <Col md={3}>
                    { isAudioPlayerVisible && <AudioPlayer/> }
                </Col>
            </Row>
        </Grid>
    );
}

App.propTypes = {
    selectedSong: PropTypes.object.isRequired,
    centralSection: PropTypes.oneOf(Object.keys(CentralSections)
            .map(key => CentralSections[key])).isRequired
};

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong,
        centralSection: state.centralSection
    };
};

export default connect(mapStateToProps)(App);
