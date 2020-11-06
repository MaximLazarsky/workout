import {
    ADD_NEW_EXER,
    DELETE_EXER,
    UPDATE_EXERCISES,
    CHANGE_ORDER_EXERCISES
} from '../types'

export const addNewExer = (payload={}) => {
    return {
        type: ADD_NEW_EXER,
        payload
    }
}

export const deleteExer = (id) => ({
        type: DELETE_EXER,
        payload: id
})

export const updateExercsises = (payload) => ({
        type: UPDATE_EXERCISES,
        payload
})
