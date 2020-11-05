import {
        GET_LOGIN_AUTH, 
        TOGGLE_USER_IS_AUTH, 
        GET_USER_DATA, 
        LOGOUT,
        VERIFY,
        REGISTER_USER,
        CHECK_IS_AUTH
    } from '../types'

export const getLoginAuth = (payload={}) => {
    return {
        type: GET_LOGIN_AUTH,
        payload
    }
}

export const toggleUserIsAuth = (payload) => ({
    type: TOGGLE_USER_IS_AUTH,
    payload
})

export const getUserData = (payload) => {
    return {
        type: GET_USER_DATA,
        payload
    }   
}

export const checkIsAuth = () => ({
    type: CHECK_IS_AUTH
})

export const logout = () => ({
    type: LOGOUT
})

export const verify = (payload={}) => {
    return {
        type: VERIFY,
        payload
    } 
}

export const registerUser = (payload={}) => ({
    type: REGISTER_USER,
    payload
})