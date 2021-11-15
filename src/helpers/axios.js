import axios from 'axios'
const token = window.localStorage.getItem('token')
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { "x-access-token": token ? token : "" }
})

export default axiosInstance;