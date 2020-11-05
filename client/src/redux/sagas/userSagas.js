import {
    GET_LOGIN_AUTH, 
    TOGGLE_USER_LOADING, 
    LOGOUT, 
    VERIFY, 
    REGISTER_USER, 
    CHECK_IS_AUTH,
    CALL_EXER_LIST
} from '../types'

import { takeLatest, put, call } from "redux-saga/effects"
import {
    fetchLoginUser, 
    fetchGetUserData, 
    fetchVerifyUser, 
    fetchRegisterUser
} from '../../services/httpService'

import {toggleUserIsAuth, getUserData} from '../actions/auth'

const loginUser = function*({payload}) {
    const {email, password} = payload
    yield put({type: TOGGLE_USER_LOADING})
    
    try {
        const data = yield call(fetchLoginUser, {email, password})
        localStorage.setItem('Authorization', data.token)  
        yield put({type: TOGGLE_USER_LOADING})
        yield put({type: CHECK_IS_AUTH})
    } catch(e) {
        console.log({e}) 
        yield put({type: TOGGLE_USER_LOADING})  
    }
}

const getAuthUserData = function*() {

    try {
        const data = yield call(fetchGetUserData)

        yield put(getUserData(data))
        yield put(toggleUserIsAuth(true))
    }catch(e) {
        console.log({e}) 
    }
}

const logoutUser = function*() {
    try {
        localStorage.removeItem('Authorization')
        yield put(toggleUserIsAuth(false))
    } catch(e) {
        console.log({e})
    }
}

const verifyUser = function*({payload}) {
    const {email, verificationCode} = payload
    yield put({type: TOGGLE_USER_LOADING})
    
    try {
        const data = yield call(fetchVerifyUser, {email, verificationCode})
        console.log({data})
        localStorage.setItem('Authorization', data.token)  
        yield put({type: TOGGLE_USER_LOADING})
        yield put({type: CHECK_IS_AUTH})
    } catch(e) {
        console.log({e}) 
        yield put({type: TOGGLE_USER_LOADING})  
    }
}

const registrationUser = function*({payload}) {
    const {email, password} = payload

    try {
        const data = yield call(fetchRegisterUser, {email, password})
    } catch(e) {
        console.log({e}) 
    }
}

export default [
    takeLatest(REGISTER_USER, registrationUser),
    takeLatest(GET_LOGIN_AUTH, loginUser),
    takeLatest(CHECK_IS_AUTH, getAuthUserData),
    takeLatest (VERIFY, verifyUser),
    takeLatest(LOGOUT, logoutUser)
]