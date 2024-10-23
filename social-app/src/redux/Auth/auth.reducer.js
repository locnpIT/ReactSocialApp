import { GET_PROFILE_REQUEST, GET_PROFILE_SUCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCESS } from "./auth.actionType";

const initialState={
    jwt:null,
    error:null,
    loading:false,
    user:null
}

export const authReducer = (state = initialState, action ) =>{

    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
            return{
                ...state, loading:true, error:null
            }

        case GET_PROFILE_SUCESS:
            return {...state, user:action.payload, error:null, loading:false}
        
        case LOGIN_SUCESS:
        case REGISTER_SUCESS: 
            return{
                ...state, jwt:action.payload, loading:false, error:null        
            }

        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
            return {...state, loading:false, error:action.payload}
       
        default:
            return state;

         
    }

}