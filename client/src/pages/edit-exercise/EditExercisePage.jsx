import React from 'react'
import useStyles from './edit-exercise-styles'
import EditExercisesConteiner from '../../components/edit-exercises/EditExercisesContainer'

export default function EditExercisePage() {

    const classes = useStyles()

    return(
        <div className={classes.main}>
          <EditExercisesConteiner/>
        </div>
    )
}