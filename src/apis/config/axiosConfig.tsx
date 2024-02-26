import axios from "axios";

const request=axios.create({
    baseURL: process.env.BASE_URL_API
})

const errorHandler=(error: Error)=>{
    return Promise.reject(error)
}

request.interceptors.request.use((config)=>{
    return config
})
request.interceptors.response.use((response)=>{
    return response
}, errorHandler)

export default request;