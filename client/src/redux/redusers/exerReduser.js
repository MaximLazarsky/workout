import {
    GET_USER_EXERCISES
} from '../types'

const defaultState = {
    exercisesList: []
}

export default function exerReducer(state = defaultState, action) {
    switch(action.type) {
        case GET_USER_EXERCISES: {
            return{
                ...state,
                exercisesList: action.payload
            } 
        }
        default:
            return state
    }
}