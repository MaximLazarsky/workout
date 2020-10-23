import axios from 'axios'
import {addExer, getExers, delExer} from '../reducers/exerReduser'

export const addNewExer = (mesurType, exerName, userId) => {
    return async(dispatch) => {
        try {
            
            const response = await axios.post(`http://localhost:5000/api/exercises/${userId}`, { mesurType, exerName},
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`
            }}
        )
            await dispatch(
                addExer(response.data.exercise)
                )
           
        } catch(e) {
            console.log(e)
        }
    }
}

export const getListExers = (userId) => {
    return async(dispatch) => {

        try {

            const response = await axios.get(`http://localhost:5000/api/exercises/${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
            })

            await dispatch(getExers(response.data.exercises))
        } catch(e) {
            console.log(e)
        }

    }
}

export const deleteExerFromExers = (id) => {
    return async(dispatch) => {

        try {

            const response = await axios.delete(`http://localhost:5000/api/exercises/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
            })

            await dispatch(delExer(response.data))

        } catch(e) {
            console.log(e)
        }

    }
}

export const udateExers = (id) => {
    return async(dispatch) => {
        // TODO
    }
}