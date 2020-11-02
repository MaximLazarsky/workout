import axios from 'axios'
import { setUser, getUser, logout } from '../reducers/userReduser'

export const verifycation = (email, verificationCode) => {
    return async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/verification', {
        email,
        verificationCode
        })
        await dispatch(setUser(response))
        localStorage.setItem('Authorization', response.data.token)
        await dispatch(getLogin())
    } catch(e) {
        console.log(e)
    } 
}}

export const login = (email, password) => {
    return async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
        })
        
        await dispatch(setUser(response))
        localStorage.setItem('Authorization', response.data.token)
        await dispatch(getLogin())
        
    } catch(e) {
        console.log(e)
    } 
}}

export const getLogin = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
            })

            await dispatch(getUser(response.data))
        } catch(e) {
            console.log(e)
        }
    }
}

export const setAutUser = () => {
    return async (dispatch) => {
        try {
            await dispatch(setUser())
            await dispatch(getLogin())
        } catch(e) {
            console.log(e)
        }
    
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        try {
            localStorage.removeItem('Authorization')
            await dispatch(logout())
        } catch(e) {
            console.log(e)
        }
    
    }
}
