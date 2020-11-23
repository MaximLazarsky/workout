import React from 'react'
import Button from '@material-ui/core/Button';
import WorkoutExerItem from './WorkoutExerItem'

export default function AddWorkoutForm({ 
    classes, 
    exercises, 
    onClickAddExer, 
    onClickAddNewWorkout, 
    onChangeExerName, 
    onClickDeleteExer,
    onClickChangeOrder,
    workout,
    onChangeMeasurmentOrRepeats
    }) {

    return(
        <form className={classes.form} noValidate autoComplete="off"> 
            <h3>
                New workout
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
                onClick = {()=> onClickAddNewWorkout()}
            >
                Create workout
            </Button>    
        </form>
    )
}