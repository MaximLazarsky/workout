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
    onClickDeleteExerFromList, 
    onClickChangeOrder
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
                            defaultValue={exercise}
                            onChange={(event)=> onChangeExerName(index, event)}
                        >

                        {exercises.map((props, index)=>(
                            <MenuItem 
                                key={index}
                                value={props}
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
                        defaultValue = "0"
                        name="repeats"
                        onChange={(event) => console.log("TODO")}
                    />

                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Measurment" 
                        defaultValue = "0"
                        name="measurment"
                        onChange={(event) => console.log("TODO")}
                    />

                    <p style={{width: "150px", marginLeft: "20px", fontFamily: "Roboto"}}>
                        {exercise.mesurType}
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
                        onClick = {()=>onClickDeleteExerFromList(index)}
                    />
                </div>    
    )
}