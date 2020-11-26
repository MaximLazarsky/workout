import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addNewExer} from '../../redux/actions/exer'
import AddExerciseForm from '../common/AddExerciseForm'
import useStyles from './add-exercise-styles'
import { setTostMessage } from "../../redux/actions/tost"

export default function NewExercisePage() {

    const classes = useStyles()

    const dispatch = useDispatch()
    const [mesurType, setMesurType] = useState('')
    const [exerName, setExerName] = useState('')

    const {userId} = useSelector((state) => state.user.currentUser ) 

    const handleChange = (event) => {
        setMesurType(event.target.value)
    };

    const InfoMessage = () => {
        if(exerName && mesurType) {
                return "exercise was created"
         } else {
                return "Please, enter exercise name and measurment type"
         }
    }

    const onClickAddExer = () => {
        const message = InfoMessage()
        if(message === "exercise was created") {
            dispatch(addNewExer({userId, exerName, mesurType}))
            setMesurType('')
            setExerName('')
            dispatch(setTostMessage(message))
        } else {
            dispatch(setTostMessage(message))
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