import {
        GET_USER_DATA, 
        TOGGLE_USER_LOADING, 
        TOGGLE_USER_IS_AUTH, 
        LOGOUT
    } from '../types'

const defaultState = {
    currentUser: {},
    isAuth: false,
    isLoading: false
}

export default function userReduser(state = defaultState, action) {
    switch(action.type) {
        case TOGGLE_USER_LOADING: 
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case TOGGLE_USER_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case GET_USER_DATA:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOGOUT: 
            return {
                ...state,
                currentUser: {}
            }
        default:
            return state
    }
}