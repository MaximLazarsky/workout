import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getListExers} from '../../actions/exerActions'
import {updExer} from '../../reducers/exerReduser'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteExerFromExers, udateExers} from '../../actions/exerActions'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import useStyles from './edit-exercise-styles'

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
    }

    function onClickChangeOrder(arr, index, direction) {
        const nextElem = direction ? index + 1 : index - 1;
        const condition = direction ? nextElem >= arr.length : nextElem < 0;
        if(condition) return
        [arr[index], arr[nextElem]] = [arr[nextElem], arr[index]]
        dispatch(updExer(arr))
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
                        onClick = {()=>{
                            onClickChangeOrder(userExer, index, true)
                        }}
                    />

                    <Button
                        variant="contained"
                        startIcon={<ArrowUpwardIcon />}
                        className={`${classes.button} ${classes.buttonOrder}`}
                        onClick = {()=>{onClickChangeOrder(userExer, index, false) }}
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