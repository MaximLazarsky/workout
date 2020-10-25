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
    input: {
      marginTop: "20px"
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

    const [mesurType, setMesurType] = useState('')
    const [exerName, setExerName] = useState('')

    return(
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "60vh",
            marginTop: "150px"
            }}
        >
            <form className={classes.form} noValidate autoComplete="off"> 
            <h3>
                Edit exercises
            </h3>

            <Button
                variant="contained"
                color="secondary"
                style={{
                     marginRight: "15px",
                     width: "200px",
                     marginBottom: "30px"
                }}
                onClick = {()=>{history.push("/new-exercise")}}
            >
                Add exercise
            </Button>    

            {userExer && userExer.map((props, index)=>(
                <div 
                    style={{
                        display: 'flex',
                        margin: '10px 0 50px'
                    }}
                    key={props._id}
                    > 
                    <div>
                        <InputLabel 
                            id="demo-simple-select-label"
                            style={{
                                fontSize: "12px",
                                width: "100px",
                                marginRight: "70px"
                            }}
                            >
                               Exercise name
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={props.exerName}
                            // onChange={
                            //     (event)=> {} 
                            // }
                            style={{
                                width: "200px",
                                // marginRight: "50px"
                            }}
                        >

                        {userExer && userExer.map((props, index)=>(
                            <MenuItem value={props.exerName}>{props.exerName}</MenuItem>
                        ))}
                        </Select>
                    </div>
                    <TextField 
                        id="standard-basic"  
                        label="Reapets" 
                        value = ""
                        // onChange={(event) =>{}}
                        style={{
                            width: "150px",
                            marginLeft: "50px"
                        }}
                    />

                    <TextField 
                        id="standard-basic"  
                        label="Measurment" 
                        value = ""
                        // onChange={(event) =>{}}
                        style={{
                            width: "150px",
                            marginLeft: "50px"
                        }}
                    />

                    <Button
                        variant="contained"
                        startIcon={<ArrowDownwardIcon />}
                        style={{
                            marginRight: "15px",
                            marginLeft: "50px",
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
                        onClick = {()=>{}}
                    />
                </div>    
            ))}
            <Button
                variant="contained"
                color="secondary"
                style={{
                     marginRight: "15px",
                     width: "200px"
                }}
                // onClick = {()=>{}}
            >
                Create workout
            </Button>    
          </form>
        </div>
    )
}