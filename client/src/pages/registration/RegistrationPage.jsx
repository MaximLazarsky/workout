import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useState } from "react"
import { registerUser } from "../../redux/actions/auth"
import { useDispatch } from "react-redux"
import history from '../../history'
import axios from 'axios'


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

export default function RegistrationPage() {

    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const dispatch = useDispatch()

    function isValidPassword() {
      if (repeatPassword === password) {
        return true
      }
    }

    // const registration = async () => {
    //   try {
    //     if(isValidPassword) {
    //       const response = await axios.post('http://localhost:5000/api/auth/registration', {
    //       email,
    //       password
    //       })
  
    //       history.push(response.data.link)
    //     } else {
    //       console.log("wrong password")
    //     }
          
    //   } catch(e) {
    //       console.log(e)
    //   } 
    // }
    const classes = useStyles();
  

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
                Register with Fit Trainer App
              </h3>
              <p>
                Please, enter your email and password
              </p>
            </div>
            <TextField 
            id="standard-basic"  
            label="Email address" 
            value= {email}
            onChange = {(event) => setEmail(event.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value= {password}
              onChange = {(event) => setPassword(event.target.value)}
            />
            <TextField
              id="standard-password-input-repeat"
              label="Repeat password"
              type="password"
              autoComplete="current-password"
              value= {repeatPassword}
              onChange = {(event) => setRepeatPassword(event.target.value)}
            />
            <Button 
              variant="contained" 
              className={classes.input} 
              color="primary" 
              onClick={() => dispatch(registerUser({email, password}))}>
              Sign Up
            </Button>
          </form>
        </div>
      )

}