import {
        GET_USER_DATA, 
        TOGGLE_USER_LOADING, 
        TOGGLE_USER_IS_AUTH, 
        LOGOUT,
        SET_DATE,
        CHECK_INPUT_REGISTER,
        SET_TOST_MESSAGE
    } from '../types'
import {formatDate} from '../../services/dateFormat'

const defaultState = {
    currentUser: {},
    isAuth: false,
    isLoading: false,
    isInputRegister: false,
    date: formatDate(new Date()),
    tostMessage: ""
}

export default function userReduser(state = defaultState, action) {
    switch(action.type) {
        case SET_TOST_MESSAGE:
            return {
                ...state,
                tostMessage: action.payload
            }
        case CHECK_INPUT_REGISTER:
            return {
                ...state,
                isInputRegister: !state.isInputRegister
            }
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
        case SET_DATE:
            return {
                ...state,
                date: action.payload
            }
        default:
            return state
    }
}