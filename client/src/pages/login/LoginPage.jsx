import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useDispatch } from "react-redux"
import {login} from '../../actions/userActions'
import { useState } from "react"
import history from '../../history'

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

export default function LoginPage() {

    const classes = useStyles();

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

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
                Sign into Fit Trainer App
              </h3>
              <p>
                Please, enter your email and password
              </p>
            </div>
            <TextField 
              id="standard-basic"  
              label="Email address" 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button 
              variant="contained" 
              className={classes.input} 
              color="primary"
              onClick={()=>{
                dispatch(login(email, password))
                history.push("/dashboard")
              }}
            >
              Sing In
            </Button>
          </form>
        </div>
      )
}