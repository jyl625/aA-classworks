import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './sesssion'

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
});
