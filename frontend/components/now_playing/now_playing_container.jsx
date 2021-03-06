import { connect } from 'react-redux';
import NowPlaying from './now_playing';
import { nextSong } from '../../actions/play_queue_actions';

const mapStateToProps = state => {
  return ({
    currentSong: state.playQueue.currentSong
  });
}

const mapDispatchToProps = dispatch => {
  return ({
    nextSong: () => dispatch(nextSong())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
