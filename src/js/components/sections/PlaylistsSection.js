import React, { Component } from 'react';
import { Well, Col, Row, PageHeader, Glyphicon, ButtonGroup } from 'react-bootstrap';
import Playlists from '../lists/Playlists';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreatePlaylistButton from '../buttons/CreatePlaylistButton';
import PlaylistForm from '../forms/PlaylistForm';
import DeleteButton from '../buttons/DeleteButton';
import { setDeleteMode } from '../../actions/playlistActions';

class PlaylistsSection extends Component {

    componentWillUnmount() {
        this.props.dispatch(setDeleteMode(false));
    }

    render() {
        const { isFormVisible, isDeleteMode } = this.props;
        return (
            <Well>
                <Row>
                    <Col md={12}>
                        <PageHeader>Playlists</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ButtonGroup vertical block>
                            <CreatePlaylistButton>
                                <Glyphicon glyph="plus"/> Create Playlist
                            </CreatePlaylistButton>
                            <DeleteButton>
                                <Glyphicon glyph="trash"/> Delete Playlist
                            </DeleteButton>
                        </ButtonGroup>
                        { isDeleteMode && <p>Choose playlist to remove.</p> }
                        { isFormVisible && <PlaylistForm/> }
                    </Col>
                    <Col md={6}>
                        <Playlists/>
                    </Col>
                </Row>
            </Well>
        );
    }
}

PlaylistsSection.propTypes = {
    isFormVisible: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    isDeleteMode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { isFormVisible, isDeleteMode } = state.playlists;
    return {
        isFormVisible,
        isDeleteMode
    };
};

export default connect(mapStateToProps)(PlaylistsSection);