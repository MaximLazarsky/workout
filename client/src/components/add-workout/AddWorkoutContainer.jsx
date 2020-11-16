import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './new-workout-styles'
import AddWorkoutForm from '../common/AddWorkoutForm'
import {addNewWorkout} from '../../redux/actions/workout'
import changeOrder from '../../services/changeOrderServices'

export default function AddWorkoutContainer() {

    const classes = useStyles()

    const {exercises} = useSelector((state)=> state.user.currentUser)

    const defaultExerList = exercises && [exercises[0]]

    const [localExercises, setlocalExercises] = useState(defaultExerList)

    console.log("local exer from container", localExercises)

    const defaultWorkout = localExercises && localExercises.map(element => {
        return {
            exerciseId: element._id,
            repeats: "0",
            measurment: "0",
        }
    })

    const [workout, setWorkout] = useState(defaultWorkout)

    console.log("workout", workout)

    function onClickAddExer() {
        const exerList = [...localExercises]
        exerList.push(exercises[0])
        setlocalExercises(exerList)
        const newWorkout = exerList.map(element => {
            return {
                exerciseId: element._id,
                repeats: "0",
                measurment: "0",
            }
        })
        setWorkout(newWorkout)
    }

    function onChangeExerName(index, event) {
        const exerList = [...localExercises]
        exerList[index] = event.target.value
        setlocalExercises(exerList)
    }

    function onClickDeleteExerFromList(index) {
        const exerList = [... localExercises]
        exerList.splice(index, 1)
        setlocalExercises(exerList) 
    }

    function onClickChangeOrder(index, order) {
        const exerList = [... localExercises]
        changeOrder(exerList, index, order)
        setlocalExercises(exerList) 
    }

    return <AddWorkoutForm
        classes={classes}
        onClickAddExer={onClickAddExer}
        exercises={exercises}
        localExercises={localExercises}
        setlocalExercises={setlocalExercises}
        onChangeExerName = {onChangeExerName}
        onClickDeleteExerFromList={onClickDeleteExerFromList}
        onClickChangeOrder={onClickChangeOrder}
    />
}