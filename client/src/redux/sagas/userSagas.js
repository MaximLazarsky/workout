import axios from 'axios'
import { GET_LOGIN, SET_USER } from '../actions/types'
import {GET_LOGIN_AUTH, TOGGLE_USER_LOADING, TOGGLE_USER_IS_AUTH} from '../types'
import { takeLatest, put, call } from "redux-saga/effects"
import {fetchLoginUser} from '../../services/httpService'
import {toggleUserIsAuth} from '../actions/auth'

const loginUser = function*({payload}) {
    const {email, password} = payload
    console.log('in saga', email, password)
    yield put({type: TOGGLE_USER_LOADING})
    
    try {
        const data = yield call(fetchLoginUser, {email, password})
        console.log({data})
        localStorage.setItem('Authorization', data.token)
        // yield put({type: GET_LOGIN})  
        yield put({type: TOGGLE_USER_LOADING})
        yield put(toggleUserIsAuth())
        yield true
    } catch(e) {
        console.log({e}) 
        yield put({type: TOGGLE_USER_LOADING})  
        yield false
    }
}

const setLoginUser = function*() {
    try {
        const response = yield axios.get('http://localhost:5000/api/auth/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`
            }
        })

        yield console.log(response.data)
    } catch(e) {
        yield console.log(e)
    }
}

export default [
    takeLatest(GET_LOGIN_AUTH, loginUser),
    takeLatest(SET_USER, setLoginUser)
]