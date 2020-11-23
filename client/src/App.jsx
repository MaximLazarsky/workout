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
import {checkIsAuth} from "./redux/actions/auth"
import {userIsAuthSelector} from './redux/selectors'
import './pages/dashboard/style.css'

function App() {

  const dispatch = useDispatch()

  const isUserAuth = useSelector(userIsAuthSelector)
  useEffect(()=>{
    if(localStorage.getItem('Authorization'))
        dispatch(checkIsAuth())
  },[])

  const routesArr = !isUserAuth && !localStorage.getItem('Authorization') ? AuthRoutes : IsAuthRoutes

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
