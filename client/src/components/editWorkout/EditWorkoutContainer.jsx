import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from '../add-workout/new-workout-styles'
import EditWorkoutForm from '../common/EditWorkoutForm'
import {updateWorkout} from '../../redux/actions/workout'
import changeOrder from '../../services/changeOrderServices'

export default function EditWorkoutContainer() {

    const dispatch = useDispatch()

    const classes = useStyles()

    const {exercises} = useSelector((state)=>state.user.currentUser)

    const workoutList = useSelector((state)=>state.user.currentUser.workout)

    const {date} = useSelector((state)=>state.user)

    const targetWorkout = workoutList && workoutList.find((el) => el.date === date)

    const [workout, setWorkout] = useState(targetWorkout && targetWorkout.exercises)

    console.log(targetWorkout, workoutList)

    useEffect(()=>{
        setWorkout(targetWorkout && targetWorkout.exercises)
    },[targetWorkout])

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
            if(ex._id=== event.target.value){
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

    function onClickUpdateWorkout() {
        dispatch(updateWorkout({id: targetWorkout._id, workout: workout}))
    }
    
    if(workout) return <EditWorkoutForm
        classes={classes}
        onClickAddExer={onClickAddExer}
        exercises={exercises}
        onChangeExerName = {onChangeExerName}
        onClickDeleteExer={onClickDeleteExer}
        onClickChangeOrder={onClickChangeOrder}
        workout={workout}
        onChangeMeasurmentOrRepeats={onChangeMeasurmentOrRepeats}
        onClickUpdateWorkout={onClickUpdateWorkout}
    />

    return <h1> You haven't workout, please create workout.</h1>
}