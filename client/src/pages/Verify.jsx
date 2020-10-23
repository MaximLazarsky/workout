import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import queryString from 'query-string'
import { useDispatch } from "react-redux"
import { verifycation } from "../actions/userActions"
import { useState } from "react"


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

export default function VerifyPage(props) {

  const { location } = props

    const classes = useStyles();

    const string = queryString.parse(location.search)

    const dispatch = useDispatch()

    const [verifycationCode, setVerificationCode] = useState ("")


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
                Email verification to finish registration with Fit Trainer App
              </h3>
              <p>
                Please, enter your email and password
              </p>
            </div>
            <TextField
                id="standard-read-only-input"
                disabled
                InputProps={{
                    readOnly: true,
                }}
                value={string.email}
            />
            <TextField 
              id="standard-basic"  
              label="VerificationCode" 
              value={verifycationCode}
              onChange = {(event) => setVerificationCode(event.target.value)}
            />
            <Button 
              variant="contained" 
              className={classes.input} 
              color="primary"
              onClick={() => dispatch(verifycation(string.email, verifycationCode))}
              >
              VERIFY EMAIL
            </Button>
          </form>
        </div>
      )
}