import React from 'react';
import PlaylistForm from '../playlists/playlist_form_container';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import Dropdown from './dropdown';

class PlaylistMenu extends React.Component {

  handlePlay (e) {
    this.props.playPlaylist(this.props.playlist);
    this.props.clearModal();
  }

  handleRename (e) {
    this.props.openModal('playlist-form');
  }

  handleQueue (e) {
    this.props.addPlaylistToQueue(this.props.playlist);
    this.props.clearModal();
  }

  handleDelete (e) {
    this.props.deletePlaylist(this.props.playlist).then(
      this.props.router.push(`/users/${this.props.playlist.owner_id}/collection`)
    );
  }

  render () {
    return (
      <Dropdown isOpen={ this.props.modalOpen === "playlist-menu" }>
        <div id="playlist-menu" >
          <ul>
            <li onClick={ this.handlePlay.bind(this) }>
              Play
            </li>
            <li onClick={ this.handleQueue.bind(this) }>
              Add to Play Queue
            </li>
            <li onClick={ this.handleRename.bind(this) }>
              Rename
            </li>
            <li onClick={ this.handleDelete.bind(this) }>
              Delete
            </li>
          </ul>
        </div>
      </Dropdown>
    );
  }
}

export default withRouter(PlaylistMenu);
