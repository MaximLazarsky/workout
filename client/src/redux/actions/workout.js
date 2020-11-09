import {
    ADD_NEW_WORKOUT
} from "../types"

export const addNewWorkout = (payload={}) => ({
        type: ADD_NEW_WORKOUT,
        payload
})