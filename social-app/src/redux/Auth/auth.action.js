import axios from "axios"
import {API_BASE_URL} from "../../config/api"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAILURE, REGISTER_SUCESS } from "./auth.actionType";

export const loginUserAction = (loginData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);
        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
            
        }
        console.log("login", data)
        dispatch({type:LOGIN_SUCESS, payload:data.jwt});

    } catch (error) {
        console.log("------", error);
        dispatch({type:LOGIN_FAILURE, payload:error});
    }

}

export const registerUserAction = (registerData) => async(dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data);
        if(data.jwt){
            localStorage.setItem("jwt", data.jwt)
            
        }
        console.log("register", data);
        dispatch({type:REGISTER_SUCESS, payload:data.jwt});

    } catch (error) {
        console.log("------", error);
        dispatch({type:REGISTER_FAILURE, payload:error});
    }

}