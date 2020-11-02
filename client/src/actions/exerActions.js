import axios from 'axios'
import {addExer, getExers, delExer, updExer} from '../reducers/exerReduser'

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

            dispatch(delExer(response.data))

        } catch(e) {
            console.log(e)
        }

    }
}

export const udateExers = (idList, nameList, typeList) => {

    const exercisesList = []
    for (let i = 0 ; i <= idList.length-1; i++) {
        let exercise = {
            id: idList[i],
            exerName: nameList[i],
            mesurType: typeList[i]
        }
        exercisesList.push(exercise)
    }
    
    return async(dispatch) => {
        try {

            const response = await axios.put(`http://localhost:5000/api/exercises/`, {exercisesList},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('Authorization')}`
                }
            })
        
            dispatch(updExer(response.data.exercisesList))

        } catch(e) {
            console.log(e)
        }
    }
}

