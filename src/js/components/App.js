import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function App({ selectedSong, centralComponent }) {
    const isAudioPlayerVisible = selectedSong.hasOwnProperty("song");
    return (
        <Grid fluid={true}>
            <Row><NavigationBar/></Row>
            <Row>
                <Col md={6} mdOffset={2}>
                    { centralComponent }
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
    centralComponent: PropTypes.element.isRequired
};

const mapStateToProps = state => {
    return {
        selectedSong: state.songs.selectedItem,
        centralComponent: state.centralComponent
    };
};

export default connect(mapStateToProps)(App);
