import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import AddExerciseContainer from '../../components/add-exercise/AddExerciseContainer'

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
  }
}))

export default function NewExercisePage() {

    const classes = useStyles()

    return (
        <div className={classes.main}>
          <AddExerciseContainer/>
        </div>
      )
}