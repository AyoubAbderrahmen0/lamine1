import { ERROR_USER, LOAD_USER, LOGIN_USER, REGISTER_USER } from "../ActionTypes/ActionTypes"
import axios from "axios"


export const loginUser=(email,password)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response= await axios.post('http://localhost:8000/api/user/login',{email,password})
        dispatch({
            type:LOGIN_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}

export const registerUser=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const response=await axios.post('http://localhost:8000/api/user/register',newUser)
        dispatch({
            type:REGISTER_USER,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_USER,
            payload:error
        })
    }
}