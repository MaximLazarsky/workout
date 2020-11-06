import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



export default function EditExerciseForm({ exerName, hendlerSetExercisesList, mesurType, onClickChangeOrder, onClickDlete, onClickUpdate, exercises, classes }) {

    return(
            <form className={classes.form} noValidate autoComplete="off"> 
            <h3>
                Edit exercises
            </h3>
            {exercises && exercises.map((props, index)=>(
                <div className={classes.exerItem} key={props._id}> 
                    <TextField 
                        className={classes.textField}
                        id={props._id} 
                        label="Exercise name" 
                        defaultValue = {props.exerName}
                        name='exerName'
                        onBlur={(event) =>{hendlerSetExercisesList(event, index, exerName)}}
                    />

                    <InputLabel id={props._id} className={classes.inputLabel}>
                            Measurment <br/> Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id={props._id}
                        defaultValue={props.mesurType}
                        className={classes.select}
                        name='mesurType'
                        onChange={(event)=> {hendlerSetExercisesList(event, index, mesurType)}}
                    >
                        <MenuItem value={"kilograms"}>kilograms</MenuItem>
                        <MenuItem value={"kilomiters"}>kilomiters</MenuItem>
                        <MenuItem value={"seconds"}>seconds</MenuItem>
                    </Select>

                    <Button
                        variant="contained"
                        startIcon={<ArrowDownwardIcon />}
                        className={`${classes.button} ${classes.buttonOrder}`}
                        style={{marginLeft: "100px"}}
                        onClick = {()=>{onClickChangeOrder(index, true)}}
                    />

                    <Button
                        variant="contained"
                        startIcon={<ArrowUpwardIcon />}
                        className={`${classes.button} ${classes.buttonOrder}`}
                        onClick = {()=>{onClickChangeOrder(index, false) }}
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        onClick = {()=>{onClickDlete(props._id)}}                   
                    />
                </div>    
            ))}
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                style={{width: "200px"}}
                onClick = {()=>{onClickUpdate()}}
            >
                Update exercises
            </Button>    
          </form>
    )
}