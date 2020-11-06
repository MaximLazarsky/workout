import React from 'react'

import history from '../../history'


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function NewWorkoutPage({classes, exercises}) {

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
                onClick = {()=>{history.push("/new-exercise")}}
            >
                Add exercise
            </Button>    

            {exercises && exercises.map((props, index)=>(
                <div className={classes.exerItem} key={props._id}> 
                    <div>
                        <InputLabel 
                            id="demo-simple-select-label" className={classes.textField}>
                               Exercise name
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className={classes.select}
                            defaultValue={props.exerName}
                            onChange={(event)=> {}}
                        >

                        {exercises && exercises.map((props, index)=>(
                            <MenuItem key={index} value={props.exerName}>{props.exerName}</MenuItem>
                        ))}
                        </Select>
                    </div>
                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Repeats" 
                        value = ""
                        // onChange={(event) =>{}}
                    />

                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Measurment" 
                        value = ""
                        // onChange={(event) =>{}}
                    />

                    <p style={{width: "150px", marginLeft: "20px", fontFamily: "Roboto"}}>{props.mesurType}</p>
                        
                    <Button
                        variant="contained"
                        className={`${classes.button} ${classes.buttonOrder}`}
                        startIcon={<ArrowDownwardIcon />}
                        // onClick = {()=>{}}
                    />

                    <Button
                        variant="contained"
                        className={`${classes.button} ${classes.buttonOrder}`}
                        startIcon={<ArrowUpwardIcon />}
                        // onClick = {()=>{}}
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        className={classes.button}
                        // onClick = {()=>{}}
                    />
                </div>    
            ))}
            <Button
                variant="contained"
                color="secondary"
                style={{marginRight: "15px", width: "200px"}}
                // onClick = {()=>{}}
            >
                Create workout
            </Button>    
          </form>
    )
}