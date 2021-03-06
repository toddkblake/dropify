import React from 'react';
import { Link, withRouter } from 'react-router';
import Search from '../search/search_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleLogout(e) {
    this.props.resetPlayQueue();
    this.props.clearSearchResults();
    this.props.logout();
  }

  handleSearch(e) {
    e.preventDefault()
    this.props.openModal('search');
  }

  render () {
    const currentUser = this.props.session.currentUser;
    if (!currentUser) {
      return <div className="navbar"></div>
    } else {
      return (
        <div className="navbar">
          <Link to="/">
            <img className="round-logo-white" src={ window.images.roundLogoWhite }/>
          </Link>
          <ul>
            <li>
              <Link to="" onClick={ this.handleSearch } activeClassName="active-col">
                <i className="fa fa-search"></i>
                <p>Search</p>
              </Link>
            </li>
            <li>
              <Link to="/browse" activeClassName="active-col">
                <i className="fa fa-clone"></i>
                <p>Browse</p>
              </Link>
            </li>
            <li>
              <Link to={ `/users/${currentUser.id}/collection/` } activeClassName="active-col">
                <i className="fa fa-music"></i>
                <p>Your Music</p>
              </Link>
            </li>
            <li>
              <Link to="/follow" activeClassName="active-col">
                <i className="fa fa-users"></i>
                <p>Follow</p>
              </Link>
            </li>
          </ul>
          <div className="user">
            <Link to="#">
              <img className="user-profile-photo" src={ this.props.session.currentUser.profile_photo_small }/>
              <p>{ this.props.session.currentUser.f_name }</p>
            </Link>
            <button className="small" onClick={ this.handleLogout }>Logout</button>
          </div>
          <Search/>
        </div>
      );
    }
  }
}

export default withRouter(NavBar);
