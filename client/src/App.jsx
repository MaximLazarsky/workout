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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const dispatch = useDispatch()

  const isUserAuth = useSelector(userIsAuthSelector)
  useEffect(()=>{
    if(localStorage.getItem('Authorization')){
      dispatch(checkIsAuth())
      history.push('/dashboard')
    }    
  },[])

  const {tostMessage} = useSelector((state)=> state.user)

  useEffect(() => {
    if(tostMessage) toast(tostMessage)
  },[tostMessage])

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
                <ToastContainer 
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
              />
              </div>
            </Router>
          </Container>
  )
}

export default App;
