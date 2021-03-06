import React from 'react';
import { Link } from 'react-router';
import Playlists from '../playlists/playlists';
import { selectUserPlaylists } from '../../selectors/playlist_selectors';
import PlaylistForm from '../playlists/playlist_form_container';
import Spinner from '../loading/spinner';

class Collection extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchUser(this.props.params.userId);
    this.props.fetchUserPlaylists(this.props.params.userId);
  }

  handleModal (e) {
    this.props.openModal('playlist-form');
  }

  render () {
    if (!this.props.user) return (<Spinner/>);
    this.userPlaylists = selectUserPlaylists(this.props.playlists, this.props.user.playlist_ids);
    return (
      <div className="collection-container">
        <div className="page-header">
          <h1>Your Music</h1>
          <nav className="page-header-nav">
            <ul>
              <li>
                <Link to={ `/users/${this.props.user.id}/collection/` } className="active-row">
                  <h5>
                    Playlists
                  </h5>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="button-row">
          <button className="medium green" onClick={ this.handleModal.bind(this) }>Add Playlist</button>
        </ul>

        <Playlists
          playlists={ this.userPlaylists }
          name="Your Playlists"
          className="user-playlists"
          form={ <PlaylistForm formType="new" /> }
        />
      </div>
    );
  }
}

export default Collection;
