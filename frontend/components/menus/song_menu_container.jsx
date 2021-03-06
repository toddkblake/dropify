import { connect } from 'react-redux';
import SongMenu from './song_menu';
import { addSongToPlaylist, deleteSongFromPlaylist } from '../../actions/playlist_actions';
import { setCurrentSong, playCurrentSong, addSongToQueue } from '../../actions/play_queue_actions';
import { clearModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    playQueue: state.playQueue,
    currentUser: state.session.currentUser,
    playlists: state.playlists,
    modalOpen: state.modalOpen
  });
}

const mapDispatchToProps = dispatch => ({
  setCurrentSong: (song) => dispatch(setCurrentSong(song)),
  playCurrentSong: () => dispatch(playCurrentSong()),
  addSongToQueue: (songId) => dispatch(addSongToQueue(songId)),
  addSongToPlaylist: (songId, playlist) => dispatch(addSongToPlaylist(songId, playlist)),
  deleteSongFromPlaylist: (songId, playlist) => dispatch(deleteSongFromPlaylist(songId, playlist)),
  clearModal: () => dispatch(clearModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SongMenu);
