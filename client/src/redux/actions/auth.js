import { GET_LOGIN, SET_USER } from "./types"
import {GET_LOGIN_AUTH, TOGGLE_USER_IS_AUTH} from '../types'

export const getLogin = (payload) => {
    console.log('in action ', {payload})
    return {type: GET_LOGIN,
    payload}
}

export const setUser = (payload) => ({
    type: SET_USER,
    payload
})

// 
export const getLoginAuth = (payload={}) => {
    console.log('AUTH ACTION',{payload})

    return {
        type: GET_LOGIN_AUTH,
        payload
    }
}

export const toggleUserIsAuth = () => ({
    type: TOGGLE_USER_IS_AUTH
})