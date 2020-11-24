import React from 'react'
import InfiniteCalendar, {
    Calendar,
    withDateSelection
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { withProps } from 'recompose';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { setDate } from '../../redux/actions/dashboard'
import { formatDate } from '../../services/dateFormat'

const enhanceDay = highlighted => withProps(props => {
    return {
    isHighlighted: highlighted.indexOf(props.date) !== -1,
  }}
);

const withHighlightedDates = withProps(({ highlighted, DayComponent }) => ({
  DayComponent: enhanceDay(highlighted)(DayComponent),
}));

export default function DashboardPage() {

    const history = useHistory()

    let currentDate = new Date();

    const dispatch = useDispatch()

    const workout = useSelector((state)=>state.user.currentUser.workout)
    const workoutDates = workout && workout.map((el)=>el.date) || []

    function setSelectedDate(date) {
        dispatch(setDate(formatDate(date)))
    }

    return(
        <div
            style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",  
            height: "100vh"
            }}
        >
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "70%",
                height: "100px"
            }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick = {()=>history.push('/new-exercise')}
                >
                    ADD NEW EXERCISE
                </Button>    
                <Button
                    variant="contained"
                    color="secondary"
                    onClick = {()=>history.push('/new-workout')}
                >
                    ADD NEW WORKOUT
                </Button> 
            </div>
            <InfiniteCalendar
                Component={withDateSelection(withHighlightedDates(Calendar))}
                width={'70%'}
                height={400}
                selected={currentDate}
                onSelect={(date) => setSelectedDate(date)}
                highlighted={workoutDates}
            />
        </div>
    )
}