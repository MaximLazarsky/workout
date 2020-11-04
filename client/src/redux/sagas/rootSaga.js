import { all } from "redux-saga/effects";
import userSagas from "./userSagas";
import exerSagas from "./exerSagas"

function* rootSaga() {
  return yield all([...userSagas, ...exerSagas]);
}

export default rootSaga;