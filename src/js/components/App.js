import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import AudioPlayer from './AudioPlayer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WelcomeJumbotron from './WelcomeJumbotron';
import PlaylistsDialog from './PlaylistsDialog';

function App({ selectedSong, mainComponent, isAuthenticated }) {
    const isAudioPlayerVisible = selectedSong.hasOwnProperty("song");
    let app = null;
    if (isAuthenticated) {
        app = (
            <Row>
                <Col md={10} mdOffset={1}>
                    <Col md={8}>
                        { mainComponent }
                    </Col>
                    <Col md={4}>
                        { isAudioPlayerVisible && <AudioPlayer/> }
                    </Col>
                </Col>
            </Row>
        );
    } else {
        app = (
            <Row>
                <Col md={6} mdOffset={1}>
                    <WelcomeJumbotron/>
                </Col>
                <Col md={4}>
                    { mainComponent }
                </Col>
            </Row>
        );
    }
    return (
        <Grid fluid={true}>
            <Row><NavigationBar/></Row>
            { app }
            <PlaylistsDialog/>
        </Grid>
    );
}

App.propTypes = {
    selectedSong: PropTypes.object.isRequired,
    mainComponent: PropTypes.element.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { songs, mainComponent, auth } = state;
    return {
        selectedSong: songs.selectedItem,
        mainComponent,
        isAuthenticated: auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(App);
