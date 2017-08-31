import React from 'react';
import { Well, Row, Col, ButtonGroup, Button,
    Glyphicon, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../css/GenericSection.css';
import Spinner from 'react-spinkit';
import Songs from './lists/Songs';
import ListPagination from './ListPagination';
import PlaySongsButton from './PlaySongsButton';

export default function GenericSection(props) {
    let rightCol = null;
    if (props.isFetching) {
        rightCol = (
            <Col md={8} mdOffset={2}>
                <Spinner name="wandering-cubes" className="center"/>
            </Col>
        );
    } else {
        rightCol = (
            <div>
                <Songs/>
                <ListPagination/>
            </div>
        )
    }

    return (
        <Well>
            <Row>
                <Col md={6}>
                    { props.header }
                    <ButtonGroup>
                        <PlaySongsButton><Glyphicon glyph="play"/> { props.playButtonText }</PlaySongsButton>
                        <Button><Glyphicon glyph="star"/> Add to Favorites</Button>
                    </ButtonGroup>
                    <Image src={ props.imageUrl } className="image" thumbnail/>
                </Col>
                <Col md={6}>
                    { rightCol }
                </Col>
            </Row>
        </Well>
    );
}

GenericSection.propTypes = {
    header: PropTypes.element.isRequired,
    playButtonText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired
};