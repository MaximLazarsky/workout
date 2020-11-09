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

export default function NewWorkoutPage({classes, onClickChangeOrder, repeats, measurment, onClickCreateWorkout, hendlerSetNewExerList, onClickDeleteExerFromList, newExerList}) {

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

            {newExerList && newExerList.map((props, index)=>(
                <div className={classes.exerItem} key={props.exerciseId._id}> 
                    <div>
                        <InputLabel 
                            id="demo-simple-select-label" className={classes.textField}>
                               Exercise name
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            className={classes.select}
                            defaultValue={props.exerciseId.exerName}
                            // onChange={(event)=> {}}
                        >

                        {newExerList && newExerList.map((props, index)=>(
                            <MenuItem key={index} value={props.exerciseId.exerName}>{props.exerciseId.exerName}</MenuItem>
                        ))}
                        </Select>
                    </div>
                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Repeats" 
                        defaultValue = {repeats}
                        name="repeats"
                        onChange={(event) => hendlerSetNewExerList(event, index)}
                    />

                    <TextField 
                        id="standard-basic"
                        className={classes.textField}  
                        label="Measurment" 
                        defaultValue = {measurment}
                        name="measurment"
                        onChange={(event) => hendlerSetNewExerList(event, index)}
                    />

                    {/* <p style={{width: "150px", marginLeft: "20px", fontFamily: "Roboto"}}>
                        {exercises[exercises.indexOf(props)].mesurType}
                    </p> */}
                        
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
            ))}
            <Button
                variant="contained"
                color="secondary"
                style={{marginRight: "15px", width: "200px"}}
                onClick = {()=> onClickCreateWorkout()}
            >
                Create workout
            </Button>    
          </form>
    )
}