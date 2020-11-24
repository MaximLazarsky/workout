import React, {useState} from "react"
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getLoginAuth} from "../../redux/actions/auth"
import useStyles from "./login-form-styles"

import LoginForm from "../common/LoginForm"

export default function LoginContainer() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const history = useHistory()
    const { isAuth } = useSelector((state)=>state.user)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

    function validateEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    }

    const onLoginClick = async () => {
      dispatch(getLoginAuth({password, email}))
      if (!validateEmail(email) ) {
        setEmail("It is not EMAIL")
      } else if(password.length <= 0) {
        setEmail("Please enter your password")
      } else if(!isAuth){
        setEmail("Email or password wrong")
      } else if (isAuth) {
        history.push('/dashboard')
      }
    }

    return <LoginForm
        classes={classes}
        onLoginClick={onLoginClick}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isAuth={isAuth}
    />
}