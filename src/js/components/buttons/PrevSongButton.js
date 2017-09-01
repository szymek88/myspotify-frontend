import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import '../../../css/PrevSongButton.css';
import { previousSong } from '../../actions/playlistActions';
import { connect } from 'react-redux';

function PrevSongButton({onClick, isDisabled}) {
    return (
        <Button onClick={onClick} disabled={isDisabled} className="button">
            <Glyphicon glyph="step-backward"/> Previous
        </Button>
    );
}

const mapStateToProps = state => {
    return {
        isDisabled: state.playlist.index <= 0
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(previousSong())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrevSongButton);
