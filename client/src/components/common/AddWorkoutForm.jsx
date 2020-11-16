import React from 'react'
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
// import WorkoutExerItemContainer from '../workout-exer-item/WorkoutExerItemContainer'
import WorkoutExerItem from './WorkoutExerItem'

export default function AddWorkoutForm({ 
    classes, 
    exercises, 
    onClickAddExer, 
    localExercises, 
    onChangeExerName, 
    onClickDeleteExerFromList,
    onClickChangeOrder,
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
            {localExercises && localExercises.map((element, index) => 
             <WorkoutExerItem 
                key={index} 
                exercise={element} 
                exercises={exercises}
                index={index}
                onChangeExerName={onChangeExerName}
                onClickDeleteExerFromList={onClickDeleteExerFromList}
                onClickChangeOrder={onClickChangeOrder}
                />)}
            <Button
                variant="contained"
                color="secondary"
                style={{marginRight: "15px", width: "200px"}}
                // onClick = {()=> onClickCreateWorkout()}
            >
                Create workout
            </Button>    
          </form>
    )
}