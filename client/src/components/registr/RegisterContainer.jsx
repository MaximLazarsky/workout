import React from "react"
import useStyles from "./register-form-styles"
import { useState } from "react"
import { registerUser } from "../../redux/actions/auth"
import { useDispatch } from "react-redux"
import RefisterForm from '../common/RegisterForm'

export default function RegisterContainer() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const dispatch = useDispatch()
    const onRegisterClick = () => {
        dispatch(registerUser({email, password}))
    }

    const classes = useStyles();
    
    return <RefisterForm
        classes={classes}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
        onRegisterClick={onRegisterClick}
    />
}