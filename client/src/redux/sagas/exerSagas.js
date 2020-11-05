import {
    ADD_NEW_EXER,
    DELETE_EXER
} from '../types'

import { takeLatest, put, call } from "redux-saga/effects"

import { 
    fetchAddNewExercise, 
    fetchDeleteExer, 
    fetchUpdateUserExer 
} from '../../services/httpService'

import { checkIsAuth } from '../actions/auth'

const addUserNewExer = function*({payload}) {
    const {userId, mesurType, exerName} = payload
    try {
        const data = yield call(fetchAddNewExercise, {userId, mesurType, exerName})
        yield put(checkIsAuth())
        console.log("data from saga", data)
    } catch(e) {
        console.log({e}) 
    }
}

const deleteUserExer = function*({payload}) {

    try {
        const data = yield call(fetchDeleteExer, payload)
        yield put(checkIsAuth())
        
    } catch(e) {
        console.log({e}) 
    }
}

const updateUserExercisesList = function*(payload) {

    try {
        const data = yield call(fetchUpdateUserExer, payload)
        
    } catch(e) {
        console.log({e}) 
    }
}

export default [
    takeLatest(ADD_NEW_EXER, addUserNewExer),
    takeLatest(DELETE_EXER, deleteUserExer)
]