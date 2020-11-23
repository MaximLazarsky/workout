import {
    ADD_NEW_WORKOUT,
    UPDATE_WORKOUT
} from "../types"

export const addNewWorkout = (payload={}) => ({
        type: ADD_NEW_WORKOUT,
        payload
})

export const updateWorkout = (payload) => ({
        type: UPDATE_WORKOUT,
        payload
})