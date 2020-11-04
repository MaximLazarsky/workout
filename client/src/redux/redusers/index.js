import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools}  from "redux-devtools-extension"
import userReducer from "./userReduser"
import exerReduser from "./exerReduser"
import rootSaga from "../sagas/rootSaga"

const rootReduser = combineReducers({
    user: userReducer,
    exer: exerReduser,
    // workout: workoutReduser
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)