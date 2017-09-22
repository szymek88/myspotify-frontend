import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Playlists from './lists/Playlists';
import PropTypes from 'prop-types';
import { setModalVisible } from '../actions/playlistActions';
import { connect } from 'react-redux';

function PlaylistsDialog({ isModalVisible, onHide }) {
    return (
        <Modal show={ isModalVisible } onHide={ onHide } bsSize="small">
            <Modal.Header closeButton>
                <Modal.Title>Choose playlist:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Playlists/>
                <hr/>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={ onHide }>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

PlaylistsDialog.propTypes = {
    isModalVisible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isModalVisible: state.playlists.isModalVisible
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onHide: () => dispatch(setModalVisible(false))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsDialog);