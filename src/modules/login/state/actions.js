import axios from 'axios';
import * as types from './types';

export const login = user => {
  return async dispatch => {
    try {
      const resp = await axios.post(
        'https://160ec6da.ngrok.io/api/users/login',
        {
          email: user.userEmail,
          password: user.password,
          remember_me: user.rememberMe,
        },
      );
      console.log('resp', resp);
    } catch (err) {
      console.log(err);
    } finally {
      console.log('in finally');
    }
  };
};

export const setToken = token => {
  return dispatch => {
    return dispatch({
      type: types.USER_SET_TOKEN,
      payload: token,
    });
  };
};
