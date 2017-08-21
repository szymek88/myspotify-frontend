import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = state => {
    return {
        items: mapAlbums(state.searchResults.results.albums),
        panelHeader: 'Albums'
    };
};

function mapAlbums(albumsResources) {
    const albums = albumsResources.map(albumResources => albumResources.album);
    return albums.map(album => {
        return {
            id: album.id,
            header: album.name,
            content: album.artist.name
        };
    });
}

const mapDispatchToProps = dispatch => {
  return {
      onClick: id => console.log('album ' + id + ' clicked')
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
