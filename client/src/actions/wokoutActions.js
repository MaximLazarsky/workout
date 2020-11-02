import axios from 'axios'
import {addWorkout} from '../reducers/workoutReduser'

export const addNewWorkout = (userId, exercises, date) => {
    return async(dispatch) => {
        try {
            
            const response = await axios.post(`http://localhost:5000/api/workout/${userId}`, {exercises, date},
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`
            }}
        )
            await dispatch(
                addWorkout(response.data.workOut)
                )
           
        } catch(e) {
            console.log(e)
        }
    }
}