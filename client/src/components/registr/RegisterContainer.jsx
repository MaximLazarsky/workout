import React from "react"
import useStyles from "./register-form-styles"
import { useState } from "react"
import { registerUser, checkInputRegister } from "../../redux/actions/auth"
import { useDispatch, useSelector } from "react-redux"
import RefisterForm from '../common/RegisterForm'

export default function RegisterContainer() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const dispatch = useDispatch()
    
    const onRegisterClick = () => {
        dispatch(checkInputRegister())
        if(password === repeatPassword) dispatch(registerUser({email, password}))
    }

    const onRegisterBlur = () => {
        dispatch(checkInputRegister())
    }

    const { isInputRegister } = useSelector((state) => state.user)

    const InfoMessage = () => {
        if(password !== repeatPassword ) {
            return(
                <h4> Your password do not match  </h4>
            )
         } else if(email.length <= 0) {
            return(
                <h4> Please, enter your email </h4>
            )
         } else if(password.length <=0) {
             return(
                 <h4> Please, enter password </h4>
             )
         }
          else {
            return (
                <h4> You are registered please confirm your email  </h4>
            )
         }
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
        InfoMessage={InfoMessage}
        isInputRegister={isInputRegister}
        onRegisterBlur={onRegisterBlur}
    />
}