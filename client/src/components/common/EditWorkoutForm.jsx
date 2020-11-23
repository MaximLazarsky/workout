import React from 'react'
import Button from '@material-ui/core/Button';
import WorkoutExerItem from './WorkoutExerItem'

export default function EditWorkoutForm({ 
    classes, 
    exercises, 
    onClickAddExer, 
    onClickUpdateWorkout, 
    onChangeExerName, 
    onClickDeleteExer,
    onClickChangeOrder,
    workout,
    onChangeMeasurmentOrRepeats
    }) {

    return(
            <form className={classes.form} noValidate autoComplete="off"> 
            <h3>
                Edit Workout
            </h3>

            <Button
                variant="contained"
                color="secondary"
                style={{
                     width: "200px",
                     marginBottom: "30px"
                }}
                className={classes.button}
                onClick = {()=>onClickAddExer()}
            >
                Add exercise
            </Button> 
            {workout && workout.map((element, index) => 
             <WorkoutExerItem 
                key={index} 
                exercise={element} 
                exercises={exercises}
                index={index}
                onChangeExerName={onChangeExerName}
                onClickDeleteExer={onClickDeleteExer}
                onClickChangeOrder={onClickChangeOrder}
                onChangeMeasurmentOrRepeats={onChangeMeasurmentOrRepeats}
                />)}
            <Button
                variant="contained"
                color="secondary"
                style={{marginRight: "15px", width: "200px"}}
                onClick = {()=> onClickUpdateWorkout()}
            >
                Update workout
            </Button>    
          </form>
    )
}