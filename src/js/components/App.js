import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MusicPlayer from './MusicPlayer';

function App() {
    return (
        <Grid fluid={true}>
            <Row className="show-grid">
                <Col md={4} sm={6}><MusicPlayer /></Col>
            </Row>
        </Grid>
    );
};

export default App;
