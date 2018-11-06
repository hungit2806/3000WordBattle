import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  LOADING_USER_INFO,
  LOADING_USER_INFO_FULFILLED,
  LOADING_USER_INFO_FAILED,

  LOADING_USER_INFO_STORAGE,
  LOADING_USER_INFO_STORAGE_FULFILLED,
  LOADING_USER_INFO_STORAGE_FAILED
} from "../actions/login.actions";
import { apiRequestGet } from "../utils/api-request.utils"
import { loadDataStorage } from '../utils/load-data-storage.utils'
function* loadUserInfoStorage(data) {
  try {
    const userInfoStorage = yield call(
      loadDataStorage.bind(this,data.key)
    );
    yield put({ type: LOADING_USER_INFO_STORAGE_FULFILLED, userInfoStorage: userInfoStorage, loadingUserInfoStorage: true });  
  } catch (e) {
    console.log(e)
    yield put({ type: LOADING_USER_INFO_STORAGE_FAILED, loadingUserInfoStorage: true });
  }
}
function* loadUserInfoFb(data) {
  try {
    const userInfo = yield call(
      loadUserFB.bind(this, data.publicInfo)
    );
    yield put({ type: LOADING_USER_INFO_FULFILLED, userInfo: userInfo, loadingUser: true });
  } catch (e) {
    console.log(e)
    yield put({ type: LOADING_USER_INFO_FAILED, error: e, loadingUser: true });
  }
}
export default function* watchUserInfoSagasAsync() {
  yield all([
    takeLatest(LOADING_USER_INFO, loadUserInfoFb),
    takeLatest(LOADING_USER_INFO_STORAGE, loadUserInfoStorage),
  ]);
}
function loadUserFB(data) {
  const url =
    "https://graph.facebook.com/v2.8/me?fields=id,first_name,last_name,gender,birthday,email&access_token=" + data.accessToken;
  return apiRequestGet(url).then(result => {
    console.log(result)
    var userProfile = {
      type: "facebook",
      id: result.data.id,
      accessToken: data.accessToken,
      userName: result.data.first_name + " " + result.data.last_name
    };
    return userProfile;
  });
}
