import React from "react"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function RegisterForm({
    classes, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    repeatPassword, 
    setRepeatPassword, 
    onRegisterClick,
    InfoMessage,
    isInputRegister,
    onRegisterBlur
  }) {

    return (
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
              onClick={() => onRegisterClick()}
              onBlur={() => onRegisterBlur()}
              >
              Sign Up
            </Button>
            {!!isInputRegister ? InfoMessage(): <></>}
          </form>
      )
}