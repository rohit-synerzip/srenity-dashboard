import { combineReducers } from 'redux';

import userReducer from './modules/user/reducers';
import loginReducer from './modules/login/reducers';

const rootReducer = combineReducers({
  UserState: userReducer,
  LoginState: loginReducer,
});

export { rootReducer };
