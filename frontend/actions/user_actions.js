import * as UserApiUtil from '../util/user_api_util';
import * as FollowApiUtil from '../util/follow_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const ADD_PLAYLIST_ID_TO_USER = "ADD_PLAYLIST_ID_TO_USER";
export const RECEIVE_USER_FOLLOW = "RECEIVE_USER_FOLLOW";
export const RECEIVE_USER_UNFOLLOW = "RECEIVE_USER_UNFOLLOW";
export const RECEIVE_PLAYLIST_FOLLOW = "RECEIVE_PLAYLIST_FOLLOW";
export const RECEIVE_PLAYLIST_UNFOLLOW = "RECEIVE_PLAYLIST_UNFOLLOW";

export const fetchUsers = () => dispatch => {
  return UserApiUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => console.log(errors)
  );
}

export const fetchUser = (userId) => dispatch => {
  return UserApiUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => console.log(errors)
  );
}

export const followUser = (currentUser, user) => dispatch => {
  return FollowApiUtil.followUser(currentUser, user).then(
    follow => dispatch(receiveUserFollow(follow)),
    errors => console.log(errors)
  )
}

export const unfollowUser = (currentUser, user) => dispatch => {
  return FollowApiUtil.unfollowUser(currentUser, user).then(
    follow => dispatch(receiveUserFollow(follow)),
    errors => console.log(errors)
  )
}

export const followPlaylist = (currentUser, playlist) => dispatch => {
  return FollowApiUtil.followPlaylist(currentUser, playlist).then(
    follow => dispatch(receivePlaylistFollow(follow)),
    errors => console.log(errors)
  )
}

export const unfollowPlaylist = (currentUser, playlist) => dispatch => {
  return FollowApiUtil.unfollowPlaylist(currentUser, playlist).then(
    follow => dispatch(receivePlaylistFollow(follow)),
    errors => console.log(errors)
  )
}

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const receiveUserFollow = follow => ({
  type: RECEIVE_USER_FOLLOW,
  follow
})

export const receivePlaylistFollow = follow => ({
  type: RECEIVE_PLAYLIST_FOLLOW,
  follow
})

export const addPlaylistIdToUser = playlistId => ({
  type: ADD_PLAYLIST_ID_TO_USER
});
