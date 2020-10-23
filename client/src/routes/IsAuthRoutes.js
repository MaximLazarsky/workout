import DashboardPage from '../pages/DashboardPage'
import NewExercisePage from '../pages/NewExercisePage'
import EditExercisePage from '../pages/EditExercisePage'
import NewWorkoutPage from '../pages/NewWorkoutPage'
import EditWorkoutPage from '../pages/EditWorkoutPage'
import ReceiptIcon from '@material-ui/icons/Receipt';
import DashboardIcon from '@material-ui/icons/Dashboard'

const isAuthRoutes = [
    {   
        path: "/dashboard",
        name: "Dashboard",
        icon: DashboardIcon,
        component: DashboardPage,
    },
    {   
        path: "/new-exercise",
        name: "New Exercise",
        icon: ReceiptIcon,
        component: NewExercisePage,
    },
    {   
        path: "/edit-exercise",
        name: "Edit Exercise",
        icon: ReceiptIcon,
        component: EditExercisePage,
    },
    {   
        path: "/new-workout",
        name: "New Workout",
        icon: ReceiptIcon,
        component: NewWorkoutPage,
    },
    {   
        path: "/edit-workout",
        name: "Edit Workout",
        icon: ReceiptIcon,
        component: EditWorkoutPage,
    },
]

export default isAuthRoutes