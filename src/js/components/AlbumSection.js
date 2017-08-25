import React from 'react';
import { Col, Row, Well, PageHeader, Image, Button,
    Glyphicon, ButtonGroup } from 'react-bootstrap';
import AlbumSongs from './lists/AlbumSongs';
import '../../css/AlbumSection.css';
import SongsPagination from './SongsPagination';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function AlbumSection(props) {
    return (
        <Well>
            <Row>
                <Col md={6}>
                    <PageHeader>
                        { props.albumName } <small>{ props.artistName }</small>
                    </PageHeader>
                    <ButtonGroup>
                        <Button><Glyphicon glyph="play"/> Play Album</Button>
                        <Button><Glyphicon glyph="star"/> Add to Favorites</Button>
                    </ButtonGroup>
                    <Image src={props.imageSrc} className="image" thumbnail/>
                </Col>
                <Col md={6}>
                    <AlbumSongs/>
                    <SongsPagination/>
                </Col>
            </Row>
        </Well>
    );
}

AlbumSection.propTypes = {
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        albumName: state.selectedAlbum.albumResource.album.name,
        artistName: state.selectedAlbum.albumResource.album.artist.name,
        imageSrc: state.selectedAlbum.albumResource.links
            .find(link => link.rel === 'image').href
    };
};

export default connect(mapStateToProps)(AlbumSection);
