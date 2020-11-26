import {
    ADD_NEW_EXER,
    DELETE_EXER,
    UPDATE_EXERCISES,
    TOGGLE_USER_LOADING
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
        yield call(fetchAddNewExercise, {userId, mesurType, exerName})
        yield put(checkIsAuth())
    } catch(e) {
        console.log({e}) 
    }
}

const deleteUserExer = function*({payload}) {

    try {
        yield call(fetchDeleteExer, payload)
        yield put(checkIsAuth())
        
    } catch(e) {
        console.log({e}) 
    }
}

const updateUserExercisesList = function*({payload}) {
    yield put({type: TOGGLE_USER_LOADING})
    try {
        yield call(fetchUpdateUserExer, payload)
        yield put(checkIsAuth())
        yield put({type: TOGGLE_USER_LOADING})
    } catch(e) {
        console.log({e}) 
    }
}

export default [
    takeLatest(ADD_NEW_EXER, addUserNewExer),
    takeLatest(DELETE_EXER, deleteUserExer),
    takeLatest(UPDATE_EXERCISES, updateUserExercisesList),
]