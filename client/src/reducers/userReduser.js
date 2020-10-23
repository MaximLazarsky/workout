const SET_USER = "SET_USER"
const GET_USER = "GET_USER"
const LOGOUT = "LOGOUT"

const defaultState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch(action.type){
            case SET_USER:
                return {
                    ...state,
                    isAuth: true
                }
            case GET_USER:
                return {
                    ...state,
                    currentUser: action.payload,
                }
            case LOGOUT: 
                return {
                    isAuth: false,
                    currentUser: {}
                }      

        default:
            return state
    }
}

export const setUser = (payload) => ({type: SET_USER, payload})
export const getUser = (payload) => ({type: GET_USER, payload})
export const logout = () => ({type: LOGOUT})