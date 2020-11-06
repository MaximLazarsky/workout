import React, {useState} from "react"
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { getLoginAuth} from "../../redux/actions/auth"
import useStyles from "./login-form-styles"

import LoginForm from "../common/LoginForm"

export default function LoginContainer() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

    const onLoginClick = async () => {
      dispatch(getLoginAuth({password, email}))
      history.push('/dashboard')
    }

    return <LoginForm
        classes={classes}
        onLoginClick={onLoginClick}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
    />
}