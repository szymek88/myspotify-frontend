import React, { Component } from 'react';
import { Well, Row, Col, PageHeader, Glyphicon, ButtonGroup } from 'react-bootstrap';
import PlaylistSongs from '../lists/PlaylistSongs';
import ListPagination from '../ListPagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/songActions';
import { findLink } from '../../utils';
import PlaySongsButton from '../buttons/PlaySongsButton';
import { setPlaylistSongsVisible, setDeleteMode } from '../../actions/playlistActions';
import DeleteButton from '../buttons/DeleteButton';

class PlaylistSongsSection extends Component {

    componentDidMount() {
        const { dispatch, songsUrl } = this.props;
        dispatch(fetchSongs(songsUrl));
        dispatch(setPlaylistSongsVisible(true));
    }

    componentWillUnmount() {
        const dispatch = this.props.dispatch;
        dispatch(setPlaylistSongsVisible(false));
        dispatch(setDeleteMode(false));
    }

    render() {
        const { playlistName, isDeleteMode } = this.props;
        return (
            <Well>
                <Row>
                    <Col md={6}>
                        <PageHeader>{ playlistName }</PageHeader>
                        <ButtonGroup vertical block>
                            <PlaySongsButton>
                                <Glyphicon glyph="play"/> Play Songs
                            </PlaySongsButton>
                            <DeleteButton>
                                <Glyphicon glyph="trash"/> Remove Song
                            </DeleteButton>
                        </ButtonGroup>
                        { isDeleteMode && <p>Choose song to remove.</p> }
                    </Col>
                    <Col md={6}>
                        <PlaylistSongs/>
                        <ListPagination/>
                    </Col>
                </Row>
            </Well>
        );
    }
}

PlaylistSongsSection.propTypes = {
    playlistName: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    songsUrl: PropTypes.string.isRequired,
    isDeleteMode: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { selectedItem, isDeleteMode } = state.playlists;
    const { playlist, links } = selectedItem;
    return {
        playlistName: playlist.name,
        songsUrl: findLink(links, 'songs'),
        isDeleteMode
    }
};

export default connect(mapStateToProps)(PlaylistSongsSection);