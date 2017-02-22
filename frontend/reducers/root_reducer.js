import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import BrowseReducer from './browse_reducer';
import PlayQueueReducer from './play_queue_reducer';
import PlaylistsReducer from './playlists_reducer';
import UsersReducer from './users_reducer';
import ModalReducer from './modal_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  browse: BrowseReducer,
  playlists: PlaylistsReducer,
  users: UsersReducer,
  playQueue: PlayQueueReducer,
  modalOpen: ModalReducer
});

export default RootReducer;
