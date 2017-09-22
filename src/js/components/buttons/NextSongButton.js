import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import '../../../css/NextSongButton.css';
import { nextSong } from '../../actions/playQueueActions';
import { connect } from 'react-redux';

function NextSongButton({onClick, isDisabled}) {
    return (
        <Button onClick={onClick} disabled={isDisabled} className="button">
            Next <Glyphicon glyph="step-forward"/>
        </Button>
    );
}

const mapStateToProps = state => {
    const { songs, index } = state.playQueue;
    return {
        isDisabled: index >= songs.length - 1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(nextSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NextSongButton);