const ADD_WORKOUT = "ADD_WORKOUT"

const defaultState = {
    userWorkouts: []
}

export default function workoutReducer(state = defaultState, action){
    switch(action.type){
        case ADD_WORKOUT: {
            return {
                ...state
            }
        } 
        default: {
            return state
        }
    }
}