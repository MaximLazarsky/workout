import { all } from "redux-saga/effects";
import userSagas from "./userSagas";
import exerSagas from "./exerSagas"
import workoutSagas from "./workoutSagas"

function* rootSaga() {
  return yield all([...userSagas, ...exerSagas, ...workoutSagas]);
}

export default rootSaga;