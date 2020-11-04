import {
    GET_USER_EXERCISES,
    CALL_EXER_LIST
} from '../types'

export const getUserExercises = (payload) => {
    console.log("getExerAction", payload)
    return {
        type: GET_USER_EXERCISES,
        payload
    }   
}

export const callExerList = (payload) => {
    return {
        type: CALL_EXER_LIST,
        payload
    }
}