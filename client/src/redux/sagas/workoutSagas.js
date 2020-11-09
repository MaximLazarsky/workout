import { takeLatest, put, call } from "redux-saga/effects"
import {
    ADD_NEW_WORKOUT
} from "../types"

import {
    checkIsAuth
} from "../actions/auth"

import {
    fetchAddNewWorkout
} from "../../services/httpService"


const addUserNewWorkout = function*({payload}) {
    try {
        yield call(fetchAddNewWorkout, payload)
        yield put(checkIsAuth())
    } catch(e) {
        console.log({e}) 
    }
}

export default [
    takeLatest(ADD_NEW_WORKOUT, addUserNewWorkout)
]