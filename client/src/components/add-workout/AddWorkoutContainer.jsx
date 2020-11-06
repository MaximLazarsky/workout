import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../history'
import useStyles from './new-workout-styles'


import AddWorkoutForm from '../common/AddWorkoutForm'

export default function AddWorkoutContainer() {

    const classes = useStyles()

    const dispatch = useDispatch()

    const {exercises} = useSelector((state)=> state.user.currentUser)

    return <AddWorkoutForm
        classes={classes}
        exercises={exercises}
    />
}