import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import '../../../css/PlaylistForm.css';
import PlaylistNameInput from './PlaylistNameInput';
import SubmitNameButton from '../buttons/SubmitNameButton';
import CancelButton from '../buttons/CancelButton';

export default function PlaylistForm() {
    return (
        <form className="playlistForm">
            <PlaylistNameInput/>
            <ButtonToolbar>
                <SubmitNameButton/>
                <CancelButton>Cancel</CancelButton>
            </ButtonToolbar>
        </form>
    );
}
