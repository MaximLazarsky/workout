import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getListExers} from '../actions/exerActions'
import { makeStyles } from '@material-ui/core/styles'
import history from '../history'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        marginTop: "150px"
    },
    form: {
        border: "solid 2px #d1d1d1",
        width: '90%',
        height: '500px',
        overflowY: 'scroll',
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "borderBox"
    },
    exerItem : {
        display: 'flex',
        margin: '10px 0 50px'
    },
    textField : {
        width: "150px",
        marginLeft: "50px"
    },
    inputLabel: {
        fontSize: "12px",
        width: "20px",
        marginRight: "70px"
    },
    select: {
        width: "200px"
    },
    button: {
        marginRight: "15px"
    },
    buttonOrder: {
        background: "#ffb74d",
        color: "#fff"
    }
  }))

export default function NewWorkoutPage() {

    const classes = useStyles()

    const dispatch = useDispatch()

    const {userId} = useSelector((state)=> state.user.currentUser)

    useEffect(()=>{
            if (userId) {
                dispatch(getListExers(userId))
            }
    }, [])

    const {userExer} = useSelector((state)=> state.exer)

    const [exerName, setExerName] = useState('')

    return(
        <div className = {classes.main}>
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

            {userExer && userExer.map((props, index)=>(
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

                        {userExer && userExer.map((props, index)=>(
                            <MenuItem value={props.exerName}>{props.exerName}</MenuItem>
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
        </div>
    )
}