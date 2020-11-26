import { takeLatest, put, call } from "redux-saga/effects"
import {
    ADD_NEW_WORKOUT,
    UPDATE_WORKOUT,
    TOGGLE_USER_LOADING
} from "../types"

import {
    checkIsAuth
} from "../actions/auth"

import {
    fetchAddNewWorkout, 
    fetchUpdateUserWorkout
} from "../../services/httpService"


const addUserNewWorkout = function*({payload}) {
    yield put({type: TOGGLE_USER_LOADING})
    try {
        yield call(fetchAddNewWorkout, payload)
        yield put(checkIsAuth())
        yield put({type: TOGGLE_USER_LOADING})
    } catch(e) {
        console.log({e}) 
    }
}

const updateUserWorkout = function* ({payload}) {
    try {
        yield call(fetchUpdateUserWorkout, payload)
        yield put(checkIsAuth())
    } catch(e) {
        console.log({e})
    }
}

export default [
    takeLatest(ADD_NEW_WORKOUT, addUserNewWorkout),
    takeLatest(UPDATE_WORKOUT, updateUserWorkout)
]