import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addNewExer} from '../../redux/actions/exer'
import AddExerciseForm from '../common/AddExerciseForm'
import useStyles from './add-exercise-styles'

export default function NewExercisePage() {

    const classes = useStyles()

    const dispatch = useDispatch()
    const [mesurType, setMesurType] = useState('')
    const [exerName, setExerName] = useState('')

    const {userId} = useSelector((state) => state.user.currentUser ) 

    const handleChange = (event) => {
        setMesurType(event.target.value)
    };

    const onClickAddExer = () => {
        if(exerName && mesurType) {
            dispatch(addNewExer({userId, exerName, mesurType}))
            setMesurType('')
            setExerName('exercise was created')
        } else {
            setExerName("Please fill in the input fields") 
        }
    }

    return <AddExerciseForm
        classes={classes}
        mesurType={mesurType}
        exerName={exerName}
        setExerName={setExerName}
        handleChange={handleChange}
        onClickAddExer={onClickAddExer}
    />
}