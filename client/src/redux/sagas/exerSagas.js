import {
    CALL_EXER_LIST
} from '../types'

import { takeLatest, put, call } from "redux-saga/effects"

import {
    fetchGetUserExercises
} from '../../services/httpService'

import { getUserExercises, callExerList } from '../actions/exer'

const getUserExercisesList = function*({payload}) {
    yield put(callExerList(payload))
    const { userId } = payload
    console.log("in saga", payload)
    try {
        const data = yield call(fetchGetUserExercises(userId), {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('Authorization')}`
            }
        })

        yield put(getUserExercises(data))
    }catch(e) {
        console.log({e}) 
    }
}

export default [
    takeLatest(CALL_EXER_LIST, getUserExercisesList)
]