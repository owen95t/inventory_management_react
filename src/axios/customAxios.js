const axios = require('axios')

const errors = [401] //add 404, 500
const config = {
    baseURL: 'https://api.coffeediary.app/api',
    // baseURL: 'http://localhost:3000/api',
    //for local testing
    timeout: 5000,
    withCredentials: true,
}

const customAxios = new axios.create(config)

customAxios.interceptors.response.use(response => {
    return response
}, error => {
    if(errors.includes(error.response.status)){
        console.log('ERROR 401')
    }
    return Promise.reject(error)
})

export default customAxios
