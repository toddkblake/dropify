import { connect } from 'react-redux';
import ArtistDetail from './artist_detail';
import { fetchArtist } from '../../actions/browse_actions';

const mapStateToProps = (state, ownProps) => ({
  artistId: ownProps.params.artistId,
  artist: state.browse.artist
});

const mapDispatchToProps = dispatch => ({
  fetchArtist: (artistId) => dispatch(fetchArtist(artistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetail);
