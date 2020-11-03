import { all } from "redux-saga/effects";
import userSagas from "./userSagas";

function* rootSaga() {
  return yield all([...userSagas]);
}

export default rootSaga;