import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools}  from "redux-devtools-extension"
import thunk from "redux-thunk"
import userReducer from "./userReduser"
import exerReduser from "./exerReduser"
import workoutReduser from "./workoutReduser"


const rootReducer = combineReducers({
    user: userReducer,
    exer: exerReduser,
    workout: workoutReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))