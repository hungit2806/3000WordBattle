import { all, fork } from "redux-saga/effects";
import watchUserInfoSagasAsync from "./login.saga";

export default function* sagas() {
  yield all([
    fork(watchUserInfoSagasAsync)
  ]);
}
