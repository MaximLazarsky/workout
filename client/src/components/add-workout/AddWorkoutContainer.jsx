import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './new-workout-styles'
import AddWorkoutForm from '../common/AddWorkoutForm'
import {addNewWorkout} from '../../redux/actions/workout'
import changeOrder from '../../services/changeOrderServices'

export default function AddWorkoutContainer() {

    const dispatch = useDispatch()

    const classes = useStyles()

    const {exercises} = useSelector((state)=> state.user.currentUser)

    const [workout, setWorkout] = useState([{
        exerciseId: exercises && exercises[0],
        repeats: "0",
        measurment: "0",
    }])

    console.log("Workout", workout)

    function onChangeMeasurmentOrRepeats(event, index) {
        const newWorkout = [...workout]
        newWorkout[index][event.target.name] = event.target.value
        setWorkout(newWorkout)
    }

    function onClickAddExer() {
        setWorkout([...workout, {
            exerciseId: exercises[0],
            repeats: "0",
            measurment: "0",
        }]) 
    }

    function onChangeExerName(index, event) {

        const newWorkout = [...workout]
        exercises.map(ex => {
            if(ex._id === event.target.value._id){
                newWorkout[index].exerciseId = ex;
            }
        })
        setWorkout(newWorkout)
    }

    function onClickDeleteExer(index) {
        const newWorkout = [...workout]
        newWorkout.splice(index, 1)
        setWorkout(newWorkout)
    }

    function onClickChangeOrder(index, order) {
        const newWorkout = [...workout]
        changeOrder(newWorkout, index, order)
        setWorkout(newWorkout) 
    }

    function onClickAddNewWorkout() {
        dispatch(addNewWorkout(workout))
    }

    return <AddWorkoutForm
        classes={classes}
        onClickAddExer={onClickAddExer}
        exercises={exercises}
        onChangeExerName = {onChangeExerName}
        onClickDeleteExer={onClickDeleteExer}
        onClickChangeOrder={onClickChangeOrder}
        workout={workout}
        onChangeMeasurmentOrRepeats={onChangeMeasurmentOrRepeats}
        onClickAddNewWorkout={onClickAddNewWorkout}
    />
}