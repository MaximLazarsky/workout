import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools}  from "redux-devtools-extension"
import thunk from "redux-thunk"
import userReducer from "./userReduser"
import exerReduser from "./exerReduser"


const rootReducer = combineReducers({
    user: userReducer,
    exer: exerReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))