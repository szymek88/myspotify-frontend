import { connect } from 'react-redux';
import List from './List';
import { showAlbumSection } from '../../actions/mainComponentActions';

const mapStateToProps = state => {
    return {
        items: mapAlbums(state.albums.items),
        panelHeader: 'Albums'
    };
};

function mapAlbums(albumsResources) {
    return albumsResources.map(albumResource => {
        const { id, name, artist } = albumResource.album;
        return {
            id,
            header: name,
            content: artist.name,
            resource: albumResource
        };
    });
}

const mapDispatchToProps = dispatch => {
  return {
      onClick: album => {
          dispatch(showAlbumSection(album));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
