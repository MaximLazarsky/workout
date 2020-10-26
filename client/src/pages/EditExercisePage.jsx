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
import {deleteExerFromExers, udateExers} from '../actions/exerActions'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(() => ({
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
        marginRight: "50px"
    },
    inputLabel: {
        fontSize: "12px",
        width: "20px",
        marginRight: "70px"
    },
    select: {
        width: "120px"
    },
    button: {
        marginRight: "15px"
    },
    buttonOrder: {
        background: "#ffb74d",
        color: "#fff"
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

    const mesurTypeDefault = (userExer.map((props)=>{return props.mesurType}))
    const exerNameDefault =  userExer.map((props)=>{return props.exerName})
    const exerIdDefault =  userExer.map((props)=>{return props._id})
    const [mesurType, setMesurType] = useState(mesurTypeDefault)
    const [exerName, setExerName] = useState(exerNameDefault)

   function onBlurSetName(event, index) {
        const newExerName = [...exerName]
        newExerName[index] = event.target.value
        setExerName(newExerName)
   }

   function onChangeSetType(event, index) {
        const newMesurType = [...mesurType];
        newMesurType[index] = event.target.value
        setMesurType(newMesurType)
   }

   function onClickDlete(id) {
        dispatch(deleteExerFromExers(id))
        if (userId) {
            dispatch(getListExers(userId))
        }
    }

    function onClickUpdate() {
        dispatch(udateExers(
            exerIdDefault, 
            exerName, 
            mesurType
            ))
        if(userId) {
            dispatch(getListExers(userId))
        }
    }

    return(
        <div className={classes.main}>
            <form className={classes.form} noValidate autoComplete="off"> 
            <h3>
                Edit exercises
            </h3>

            {userExer && userExer.map((props, index)=>(
                <div className={classes.exerItem} key={props._id}> 
                    <TextField 
                        className={classes.textField}
                        id={props._id} 
                        label="Exercise name" 
                        defaultValue = {props.exerName}
                        onBlur={(event) =>{onBlurSetName(event, index)}}
                    />

                    <InputLabel id={props._id} className={classes.inputLabel}>
                            Measurment <br/> Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id={props._id}
                        defaultValue={props.mesurType}
                        className={classes.select}
                        onChange={(event)=> {onChangeSetType(event, index)}}
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
                        // onClick = {()=>{}}
                    />

                    <Button
                        variant="contained"
                        startIcon={<ArrowUpwardIcon />}
                        className={`${classes.button} ${classes.buttonOrder}`}
                        // onClick = {()=>{   }}
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
        </div>
    )
}