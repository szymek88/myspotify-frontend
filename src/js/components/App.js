import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MusicPlayer from './MusicPlayer';
import NavigationBar from './NavigationBar';

function App() {
    return (
        <Grid fluid={true}>
            <Row><NavigationBar/></Row>
            <Row>
                <Col md={4} sm={6}><MusicPlayer /></Col>
            </Row>
        </Grid>
    );
}

export default App;
