import DashboardPage from '../pages/dashboard/DashboardPage'
import NewExercisePage from '../pages/new-exercise/NewExercisePage'
import EditExercisePage from '../pages/edit-exercise/EditExercisePage'
import NewWorkoutPage from '../pages/new-workout/NewWorkoutPage'
import EditWorkoutPage from '../pages/edit-workout/EditWorkoutPage'
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