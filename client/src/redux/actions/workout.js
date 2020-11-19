import {
    ADD_NEW_WORKOUT
} from "../types"

export const addNewWorkout = (payload={}) => {
    console.log("FROM ACTION", payload)
    return {
        type: ADD_NEW_WORKOUT,
        payload
    }
}