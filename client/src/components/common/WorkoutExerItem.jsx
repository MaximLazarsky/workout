import React, {useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles from '../workout-exer-item/workout-item-styles'

export default function WorkoutExerItem({
    exercise, 
    exercises, 
    index, 
    onChangeExerName, 
    onClickDeleteExer, 
    onClickChangeOrder,
    onChangeMeasurmentOrRepeats
    }) {
    
        const classes = useStyles()

    return(
        <div className={classes.exerItem}> 
                    <div>
                        <InputLabel 
                            id="demo-simple-select-label" className={classes.textField}>
                               Exercise name
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className={classes.select}
                            value={exercise.exerciseId}
                            onChange={(event)=> onChangeExerName(index, event)}
                        >

                        {exercises && exercises.map((props, index)=>(
                            <MenuItem 
                                key={index}
                                value={props}
                                selected={props._id === exercise.exerciseId._id}
                             >
                                {props.exerName}
                            </MenuItem>
                        ))}
                        </Select>
                    </div>
                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Repeats" 
                        value = {exercise.repeats} 
                        name="repeats"
                        onChange={(event) => onChangeMeasurmentOrRepeats(event, index)}
                    />

                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Measurment" 
                        value = {exercise.measurment}
                        name="measurment"
                        onChange={(event) => onChangeMeasurmentOrRepeats(event, index)}
                    />

                    <p style={{width: "150px", marginLeft: "20px", fontFamily: "Roboto"}}>
                        {exercise.exerciseId.mesurType}
                    </p>
                        
                    <Button
                        variant="contained"
                        className={`${classes.button} ${classes.buttonOrder}`}
                        startIcon={<ArrowDownwardIcon />}
                        onClick = {()=>onClickChangeOrder(index, true)}
                    />

                    <Button
                        variant="contained"
                        className={`${classes.button} ${classes.buttonOrder}`}
                        startIcon={<ArrowUpwardIcon />}
                        onClick = {()=>onClickChangeOrder(index, false)}
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        onClick = {()=>onClickDeleteExer(index)}
                    />
                </div>    
    )
}