import React from 'react'
import Container from '@material-ui/core/Container'
import LeftSideBar from './components/LeftSideBar'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
import {useDispatch, useSelector} from 'react-redux'

import AuthRoutes from './routes/AuthRoutes'
import IsAuthRoutes from './routes/IsAuthRoutes'
import Verify from "./pages/Verify"
import { useEffect } from 'react'
import {setAutUser} from './actions/userActions'
import {getListExers} from './actions/exerActions'

function App() {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   if(localStorage.getItem('Authorization')) {
  //     dispatch(setAutUser()) 
  //   }
  // }, [])

  // const {userId} = useSelector((state)=> state.user.currentUser)

  // useEffect(()=>{
  //   if(localStorage.getItem('Authorization') && userId) {
  //     dispatch(getListExers(userId))
  //   }
  // })

  const user = useSelector((state) => state.user)
  const {isAuth} = user
  const routesArr = !isAuth ? AuthRoutes : IsAuthRoutes

  return (
          <Container maxWidth="xl">
            <Router history={history}>
              <div style={{display: "flex"}}>
                <LeftSideBar />
                <Switch>
                  {routesArr.map((props, index) => (
                    <Route path={props.path} key={index} component={props.component} />
                  ))}
                  <Route path="/verify" component={Verify} />
                </Switch>
              </div>
            </Router>
          </Container>
  )
}

export default App;
