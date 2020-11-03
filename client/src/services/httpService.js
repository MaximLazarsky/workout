import axios from 'axios'

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