import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getListExers} from '../actions/exerActions'
import { makeStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteExerFromExers} from '../actions/exerActions'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
    form: {
      border: "solid 2px #d1d1d1",
      width: '90%',
      height: '700px',
      overflowY: 'scroll',
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      boxSizing: "borderBox",
    },
    input: {
      marginTop: "20px"
    }
  }))

export default function EditExercisePage() {

    const classes = useStyles()

    const dispatch = useDispatch()

    const {userId} = useSelector((state)=> state.user.currentUser)

    useEffect(()=>{
            if (userId) {
                dispatch(getListExers(userId))
            }
    }, [])

    const {userExer} = useSelector((state)=> state.exer)

    const [mesurType, setMesurType] = useState('')
    const [exerName, setExerName] = useState('')

    const handleChange = (event) => {
        setMesurType(event.target.value)
    };

    return(
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
            <h3>
                Edit exercises
            </h3>

            {userExer && userExer.map((props, index)=>(
                <div 
                    style={{
                        display: 'flex',
                        margin: '10px 0 50px'
                    }}
                    key={props._id}
                    > 

                    <TextField 
                        id="standard-basic"  
                        label="Exercise name" 
                        defaultValue = {props.exerName}
                        onChange={(event) => setExerName(event.target.value)}
                        style={{
                            width: "150px",
                            marginRight: "50px"
                        }}
                    />

                    <InputLabel 
                        id="demo-simple-select-label"
                        style={{
                            fontSize: "12px",
                            width: "20px",
                            marginRight: "70px"
                        }}
                        >
                            Measurment <br/> Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={props.mesurType}
                        onChange={handleChange}
                        style={{
                            width: "120px",
                            // marginRight: "50px"
                        }}
                    >
                        <MenuItem value={"kilograms"}>kilograms</MenuItem>
                        <MenuItem value={"kilomiters"}>kilomiters</MenuItem>
                        <MenuItem value={"seconds"}>seconds</MenuItem>
                    </Select>

                    <Button
                        variant="contained"
                        startIcon={<ArrowDownwardIcon />}
                        style={{
                            marginRight: "15px",
                            marginLeft: "100px",
                            background: "#ffb74d",
                            color: "#fff"
                        }}
                        onClick = {()=>{}}
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<ArrowUpwardIcon />}
                        style={{
                            marginRight: "15px",
                            background: "#ffb74d",
                            color: "#fff"
                        }}
                        onClick = {()=>{   }}
                    />

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        style={{
                            marginRight: "15px"
                        }}
                        onClick = {()=>{
                            dispatch(deleteExerFromExers(props._id))
                            if (userId) {
                                dispatch(getListExers(userId))
                            }
                        }}
                    />
                </div>    
            ))}
            <Button
                        variant="contained"
                        color="secondary"
                        style={{
                            marginRight: "15px"
                        }}
                        onClick = {()=>{
                        }}
            >
                Update exercises
            </Button>    
          </form>
        </div>
    )
}