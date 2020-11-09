import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './new-workout-styles'
import AddWorkoutForm from '../common/AddWorkoutForm'
import {addNewWorkout} from '../../redux/actions/workout'
import changeOrder from '../../services/changeOrderServices'

export default function AddWorkoutContainer() {

    const classes = useStyles()

    const dispatch = useDispatch()

    const {exercises} = useSelector((state)=> state.user.currentUser)

    const {userId} = useSelector((state) => state.user.currentUser)

    const exercisesList = exercises && exercises.map((element) => {
        const exer = {
            exerciseId: element,
            repeats: "0",
            measurment: "0"
        }
        return exer
    })

    const [newExerList, setNewExerlist] = useState(exercisesList)

    function hendlerSetNewExerList(event, index) {
        const exerList = [... newExerList]
        exerList[index][event.target.name] = event.target.value
        setNewExerlist(exerList)
    }

    const workout = {
        userId: userId,
        exercises: newExerList || exercisesList
    }

    console.log("From Container", newExerList)

    function onClickCreateWorkout() {
        dispatch(addNewWorkout(workout))
    }


    function onClickDeleteExerFromList(index) {
        const exerList = [... newExerList]
        exerList.splice(index, 1)
        // console.log(exerList[index])
        setNewExerlist(exerList) 
    }

    function onClickChangeOrder(index, order) {
        const exerList = [... newExerList]
        changeOrder(exerList, index, order)
        setNewExerlist(exerList) 
    }

    return <AddWorkoutForm
        classes={classes}
        exercises={exercises}
        workout={workout}
        onClickCreateWorkout={onClickCreateWorkout}
        hendlerSetNewExerList={hendlerSetNewExerList}
        onClickDeleteExerFromList={onClickDeleteExerFromList}
        newExerList={newExerList}
        onClickChangeOrder={onClickChangeOrder}
    />
}