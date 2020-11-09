import React from "react"
import {useSelector} from 'react-redux'
import {userLoadingSelector} from '../../redux/selectors'
import { makeStyles } from '@material-ui/core/styles'

import LoginContainer from "../../components/login/LoginContainer"

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh"
  }}))

export default function LoginPage() {

  const classes = useStyles();
  const isUserLoading = useSelector(userLoadingSelector)

    return (
        <div className={classes.main}>
          <LoginContainer/>
          {isUserLoading && <h1>Loading...</h1>}
        </div>
      )
}