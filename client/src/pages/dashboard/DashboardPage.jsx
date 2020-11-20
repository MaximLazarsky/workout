import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'

export default function DashboardPage() {

    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)

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
            {/* <h1>Dashboard</h1> */}
            <InfiniteCalendar
                width={400}
                height={600}
                selected={today}
                disabledDays={[0,6]}
                minDate={lastWeek}
            />
        </div>
    )
}