import React, {useState} from "react"
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getLoginAuth} from "../../redux/actions/auth"
import useStyles from "./login-form-styles"
import validateEmail from '../../services/validateEmail'
import LoginForm from "../common/LoginForm"
import { setTostMessage } from "../../redux/actions/tost"

export default function LoginContainer() {
    const classes = useStyles();

    const dispatch = useDispatch()
    const history = useHistory()
    const { isAuth } = useSelector((state)=>state.user)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

    const InfoMessage = () => {
        if(!validateEmail(email)) {
            return "Please check email"
      }else if(password.length <=0) {
            return "Please, enter password"
      }
      return ""
  }

    const onLoginClick = async () => {
      const message = InfoMessage()
        if(message) {
          dispatch(setTostMessage(message))
          return
        }
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
        isAuth={isAuth}
    />
}