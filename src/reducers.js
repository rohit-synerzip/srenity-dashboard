import { combineReducers } from 'redux';

import userReducer from './modules/user/reducers';
const rootReducer = combineReducers({
  UserState: userReducer,
});

export { rootReducer };
