import React from "react"
import useStyles from "./register-form-styles"
import { useState } from "react"
import { registerUser, checkInputRegister } from "../../redux/actions/auth"
import { useDispatch, useSelector } from "react-redux"
import RegisterForm from '../common/RegisterForm'
import validateEmail from '../../services/validateEmail'
import { setTostMessage } from "../../redux/actions/tost"

export default function RegisterContainer() {
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const dispatch = useDispatch()
    
    const onRegisterClick = () => {
        const message = InfoMessage()
        if(message) {
            dispatch(setTostMessage(message))
          return
        }
        dispatch(checkInputRegister())
        dispatch(registerUser({email, password}))
    }

    const { isInputRegister } = useSelector((state) => state.user)

    const InfoMessage = () => {
        if(password !== repeatPassword ) {
                return "Your password do not match"
         } else if(!validateEmail(email)) {
                return "Please check email"
         } else if(password.length <=0) {
                return "Please, enter password"
         }
         return ""
    }
    
    const classes = useStyles();
    
    return<RegisterForm
        classes={classes}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
        onRegisterClick={onRegisterClick}
        isInputRegister={isInputRegister}
    />

}