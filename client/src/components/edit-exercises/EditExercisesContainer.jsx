import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExer, updateExercsises} from '../../redux/actions/exer'
import changeOrder from '../../services/changeOrderServices'
import useStyles from './edit-exercises-form-styles'
import EditExercisesForm from '../common/EditExercisesForm'

export default function EditExercisesConteiner() {
    const correctExerList = () => { return !exercisesList ? exercises && exercises : exercisesList }

    const classes = useStyles()

    const dispatch = useDispatch()

    const {exercises} = useSelector((state)=> state.user.currentUser)

    const mesurType = exercises && exercises.map((props)=> props.mesurType)
    const exerName =  exercises && exercises.map((props)=> props.exerName)

    const [exercisesList, setExercisesList] = useState(exercises)   

   function hendlerSetExercisesList(event, index) {
    const newExercisesList = [...exercises]
    newExercisesList[index][event.target.name] = event.target.value
    setExercisesList(newExercisesList)
}

   function onClickDlete(id) {
        dispatch(deleteExer(id))
    }

    function onClickChangeOrder(index, order) {
        changeOrder(correctExerList(), index, order)
        setExercisesList(correctExerList())
        dispatch(updateExercsises(correctExerList()))   
    }

    function onClickUpdate() {
        dispatch(updateExercsises(correctExerList()))   
    }

    return <EditExercisesForm 
        exerName={exerName}
        mesurType={mesurType}
        exercises={exercises}
        hendlerSetExercisesList={hendlerSetExercisesList}
        onClickChangeOrder={onClickChangeOrder}
        onClickDlete={onClickDlete}
        onClickUpdate={onClickUpdate}
        classes={classes}                    
    />
}