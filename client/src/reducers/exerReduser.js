const ADD_EXER = "ADD_EXER"
const GET_EXERS = "GET_EXERS"
const DEL_EXER = "DEL_EXER"
const UPD_EXER = "UPD_EXER"

const defaultState = {
    userExer: []
}

export default function exerReducer(state = defaultState, action) {
    switch(action.type){
        case ADD_EXER: {
            return {
                ...state
            }
        }
        case GET_EXERS: {
            return {
                ...state,
                userExer: action.payload
            }
        }
        case DEL_EXER: {
            return {
                ...state
            }
        }
        case UPD_EXER: {
            return {
                ...state,
                userExer: action.payload
            }
        }
        default: 
            return state
    }
}

export const addExer = (payload) => ({type: ADD_EXER, payload})
export const getExers = (payload) => ({type: GET_EXERS, payload})
export const delExer = (payload) => ({type: DEL_EXER, payload})
export const updExer = (payload) => ({type: UPD_EXER, payload})