import request from '@/helpers/request.js'

const URL = {
    REGISTER:'/auth/register',
    LOGOUT:'/auth/logout',
    LOGIN:'/auth/login',
    GRT_INFO:'/auth'
}

export default {
    register({username,password}){
        return request(URL.REGISTER,'POST',{username,password})
    },
    login({username,password}){
        return request(URL.LOGIN,'POST',{username,password})
    },
    logout(){
        return request(URL.LOGOUT)
    },
    getinfo(){
        return request(URL.GET_INFO)
    }
}