import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools}  from "redux-devtools-extension"
import userReducer from "./userReduser"
import exerReduser from "./exerReduser"
import workoutReduser from "./workoutReduser"
import thunk from 'redux-thunk'

// import createSagaMiddleware from "redux-saga"

// const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    exer: exerReduser,
    workout: workoutReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(sagaMiddleware))
// )

