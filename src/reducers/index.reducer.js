import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import loadUserInfoReducer from './login.reducer';

const reducer = combineReducers(
  {
    oidc: oidcReducer,
    userInfo: loadUserInfoReducer,
  }
);

export default reducer;