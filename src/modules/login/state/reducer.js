import * as types from './types';

const initialState = {
  token: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...state,
        name: action.payload.name,
      };

    case types.USER_SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}
