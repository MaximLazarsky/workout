import {GET_LOGIN_AUTH, TOGGLE_USER_LOADING, TOGGLE_USER_IS_AUTH} from '../types'
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
                isAuth: !state.isAuth
            }

        case "GET_LOGIN":
            return {
                ...state,
                isLoading: true
            }
        case "SET_USER":
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }    
        default:
            return state
    }
}