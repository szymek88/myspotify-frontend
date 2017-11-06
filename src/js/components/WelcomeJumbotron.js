import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function WelcomeJumbotron() {
    return (
        <Jumbotron>
            <h1>Welcome on MySpotify!</h1>
            <p>
                MySpotify is the prototype of a music service(e.g. Tidal, Spotify).
                It was created as a bachelor thesis project using React and Redux for front-end,
                and Java and Spring Boot for back-end part. Username: user, password: user.
            </p>
        </Jumbotron>
    );
}
