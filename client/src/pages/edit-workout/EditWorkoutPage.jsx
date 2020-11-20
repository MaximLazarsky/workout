import React from 'react'
import EditWorkoutContainer from '../../components/editWorkout/EditWorkoutContainer'

export default function editWorkoutPage() {
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
            <EditWorkoutContainer/>
        </div>
    )
}