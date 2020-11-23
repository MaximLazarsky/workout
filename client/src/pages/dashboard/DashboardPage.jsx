import React from 'react'
import InfiniteCalendar, {
    Calendar,
    withDateSelection
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { withProps } from 'recompose';
import { setDate } from '../../redux/actions/dashboard'

const enhanceDay = highlighted => withProps(props => {
    return {
    isHighlighted: highlighted.indexOf(props.date) !== -1,
  }}
);

const withHighlightedDates = withProps(({ highlighted, DayComponent }) => ({
  DayComponent: enhanceDay(highlighted)(DayComponent),
}));

export default function DashboardPage() {

    let currentDate = new Date();

    const dispatch = useDispatch()

    const workout = useSelector((state)=>state.user.currentUser.workout)
    const workoutDates = workout && workout.map((el)=>el.date) || []

    return(
        <div
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",  
            height: "100vh"
            }}
        >
            <InfiniteCalendar
                Component={withDateSelection(withHighlightedDates(Calendar))}
                width={'100%'}
                height={400}
                selected={currentDate}
                onSelect={(e) => console.log(e)}
                highlighted={workoutDates}
            />
            {/* dispatch(setDate(e)) */}
        </div>
    )
}