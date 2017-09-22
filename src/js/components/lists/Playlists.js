import { connect } from 'react-redux';
import List from './List';
import React, { Component } from 'react';
import { fetchPlaylists, onPlaylistClick } from '../../actions/playlistActions';

class Playlists extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPlaylists());
    }

    render() {
        const { items, onClick } = this.props;
        return (
            <List items={ items } onClick={ onClick }
                  panelHeader="Playlists"/>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: mapPlaylists(state.playlists.items)
    };
};

function mapPlaylists(playlistsResources) {
    return playlistsResources.map(playlistResource => {
        const { id, name } = playlistResource.playlist;
        return {
            id,
            content: name,
            resource: playlistResource
        };
    });
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: playlistResource => dispatch(onPlaylistClick(playlistResource)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);

