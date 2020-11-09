import React from 'react'
import useStyles from './new-workout-styles'
import AddWorkoutContainer from '../../components/add-workout/AddWorkoutContainer'

export default function NewWorkoutPage() {

    const classes = useStyles()

    return(
        <div className = {classes.main}>
            <AddWorkoutContainer/>
        </div>
    )
}