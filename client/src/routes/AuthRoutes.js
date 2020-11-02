import AcountBoxIcon from '@material-ui/icons/AccountBox'
import LoginPage from '../pages/login/LoginPage'
import RegistrationPage from '../pages/registration/RegistrationPage'

const AuthRoutes = [
    {   
        path: "/sign-up",
        name: "Sign Up",
        icon: AcountBoxIcon,
        component: RegistrationPage,
    },
    {   
        path: "/sign-in",
        name: "Sign In",
        icon: AcountBoxIcon,
        component: LoginPage,
    }
]

export default AuthRoutes