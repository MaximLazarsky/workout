import React from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default function AddExerciseForm({classes, exerName, setExerName, mesurType, handleChange, onClickAddExer}) {

    return (
          <form className={classes.form} noValidate autoComplete="off"> 
            <div>
              <h3>
                Create new exercise
              </h3>
              <p>
                Please, add a new exercise name and measurment type
              </p>
            </div>
            <TextField 
              id="standard-basic"  
              label="Exercise name" 
              value={exerName}
              onChange={(event) => setExerName(event.target.value)}
            />

            <InputLabel id="demo-simple-select-label">Measurment Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={mesurType}
                onChange={handleChange}
                >
                <MenuItem value={"kilograms"}>kilograms</MenuItem>
                <MenuItem value={"kilomiters"}>kilomiters</MenuItem>
                <MenuItem value={"seconds"}>seconds</MenuItem>
                </Select>
                    <Button 
                    variant="contained" 
                    className={classes.input} 
                    color="primary"
                    onClick={()=>onClickAddExer()}
            >
              Create Exercise
            </Button>
          </form>
      )
}