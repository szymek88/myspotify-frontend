import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../../css/List.css';

export default function List({ items, panelHeader, onClick }) {
    const listItems = items.map(item => {
        const withHeader = item.hasOwnProperty("header");
        return (
            <ListGroupItem key={ item.id.toString() }
                           onClick={() => onClick(item.resource)}
                           header={ item.header }>
                { withHeader ? item.content : <h4 className="content">{ item.content }</h4> }
            </ListGroupItem>
        );
    });
    return (
        <Panel header={ panelHeader } bsStyle="primary">
            <ListGroup fill>
                { listItems }
            </ListGroup>
        </Panel>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        panelHeader: PropTypes.string,
        content: PropTypes.string.isRequired,
        resource: PropTypes.object.isRequired
    })).isRequired,
    onClick: PropTypes.func.isRequired
};
