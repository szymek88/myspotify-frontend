import { connect } from 'react-redux';
import List from './List';
import { fetchAlbumSongs, selectAlbum } from '../../actions/albumActions';
import { showSection } from '../../actions/centralSectionActions';
import { CentralSections } from '../../CentralSections';

const mapStateToProps = state => {
    return {
        items: mapAlbums(state.searchResults.results.albums),
        panelHeader: 'Albums'
    };
};

function mapAlbums(albumsResources) {
    return albumsResources.map(albumResource => {
        const album = albumResource.album;
        return {
            id: album.id,
            header: album.name,
            content: album.artist.name,
            resource: albumResource
        };
    });
}

const mapDispatchToProps = dispatch => {
  return {
      onClick: album => {
          dispatch(fetchAlbumSongs(album));
          dispatch(selectAlbum(album));
          dispatch(showSection(CentralSections.ALBUM_SECTION))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
