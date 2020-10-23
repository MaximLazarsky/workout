import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from "react-redux"
import {addNewExer} from '../actions/exerActions'
import { useState } from "react"

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  form: {
    border: "solid 2px #d1d1d1",
    width: '400px',
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    boxSizing: "borderBox"
  },
  input: {
    marginTop: "20px"
  }
}))

export default function NewExercisePage() {

    const classes = useStyles()

    const dispatch = useDispatch()
    const [mesurType, setMesurType] = useState('')
    const [exerName, setExerName] = useState('')

    const {userId} = useSelector((state) => state.user.currentUser ) 

    const handleChange = (event) => {
        setMesurType(event.target.value)
    };

    return (
        <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh"
      }}
        >
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
                    onClick={
                      ()=>dispatch(addNewExer(mesurType, exerName, userId))
                    }
            >
              Create Exercise
            </Button>
          </form>
        </div>
      )
}