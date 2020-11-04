import axios from 'axios'

//  FETCHES for AUTH
export const fetchLoginUser = async ({email, password}) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
    })
    return response.data
}

export const fetchGetUserData = async() => {
    const response = await axios.get('http://localhost:5000/api/auth/', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('Authorization')}`
        }
    })
    return response.data
}

export const fetchVerifyUser = async({email, verificationCode}) => {
    const response = await axios.post("http://localhost:5000/api/auth/verification", {
        email,
        verificationCode
    })
    return response.data
}

export const fetchRegisterUser = async({email, password}) => {
    const response = await axios.post('http://localhost:5000/api/auth/registration', {
        email,
        password
    })
    return response.data
}

// FETCHES for EXERCISES

export const fetchGetUserExercises = async(userId) => {
    const response = await axios.post(`http://localhost:5000/api/exercises/:${userId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('Authorization')}`
        }
    })
    return response.data
}