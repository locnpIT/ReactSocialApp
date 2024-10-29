// import axios from "axios"

// import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCESS } from "./auth.actionType";
// import { api, API_BASE_URL } from '../../config/api';
// import { useNavigate } from 'react-router-dom';
// export const loginUserAction = (loginData, navigate) => async(dispatch) => {
//     dispatch({type:LOGIN_REQUEST})
//     try {
//         const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);
//         if(data.token){
//             localStorage.setItem("jwt", data.token)
            
//         }
//         console.log("login", data)
//         dispatch({type:LOGIN_SUCESS, payload:data.jwt});

//         navigate("/");

//     } catch (error) {
//         console.log("------", error);
//         dispatch({type:LOGIN_FAILURE, payload:error});
//     }

// }

// export const registerUserAction = (registerData) => async(dispatch) => {
//     dispatch({type:REGISTER_REQUEST})
//     try {
//         const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data);
//         if(data.token){
//             localStorage.setItem("jwt", data.token)
            
//         }
//         console.log("register", data);
//         dispatch({type:REGISTER_SUCESS, payload:data.jwt});

//     } catch (error) {
//         console.log("------", error);
//         dispatch({type:REGISTER_FAILURE, payload:error});
//     }

// }

// export const getProfileAction = (jwt) => async(dispatch) => {
//     dispatch({type:GET_PROFILE_REQUEST})
//     try {
//         const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`, 
//          {
//             headers:{
//                 Authorization: `Bearer ${jwt}`,

//             }
//          }   
//            );
      
//         console.log("profile", data);
//         dispatch({type:GET_PROFILE_SUCESS, payload:data.jwt});

//     } catch (error) {
//         console.log("------", error);
//         dispatch({type:GET_PROFILE_FAILURE, payload:error});
//     }

// }


// export const updateProfileAction = (reqData) => async(dispatch) => {
//     dispatch({type:UPDATE_PROFILE_REQUEST})
//     try {
//         const {data} = await api.get(`${API_BASE_URL}/api/users`, 
//          reqData
            
         
//            );
      
//         console.log("profile", data);
//         dispatch({type:UPDATE_PROFILE_SUCESS, payload:data.jwt});

//     } catch (error) {
//         console.log("------", error);
//         dispatch({type:UPDATE_PROFILE_FAILURE, payload:error});
//     }

// }



import axios from "axios";
import { 
    GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCESS, 
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS, 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCESS, 
    UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCESS 
} from "./auth.actionType";
import { API_BASE_URL } from '../../config/api';


// Login User Action
export const loginUserAction = (loginData, navigate) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data);
        if (data.token) {
            localStorage.setItem("jwt", data.token);
        }
        console.log("login", data);
        dispatch({ type: LOGIN_SUCESS, payload: data.token });

        
    } catch (error) {
        console.log("------", error);
        dispatch({ type: LOGIN_FAILURE, payload: error.response ? error.response.data : error });
    }
};

// Register User Action
export const registerUserAction = (registerData, navigate) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData.data);
        if (data.token) {
            localStorage.setItem("jwt", data.token);
        }
        console.log("register", data);
        dispatch({ type: REGISTER_SUCESS, payload: data.token });

        // Navigate to the home page after successful registration
        navigate("/");
    } catch (error) {
        console.log("------", error);
        dispatch({ type: REGISTER_FAILURE, payload: error.response ? error.response.data : error });
    }
};

// Get Profile Action
export const getProfileAction = (jwt) => async (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        });
        console.log("profile", data);
        dispatch({ type: GET_PROFILE_SUCESS, payload: data }); // Update based on what `data` actually contains
    } catch (error) {
        console.log("------", error);
        dispatch({ type: GET_PROFILE_FAILURE, payload: error.response ? error.response.data : error });
    }
};

// Update Profile Action
export const updateProfileAction = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    try {
        const { data } = await axios.put(`${API_BASE_URL}/api/users`, reqData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            }
        });
        console.log("profile", data);
        dispatch({ type: UPDATE_PROFILE_SUCESS, payload: data }); // Use data as necessary
    } catch (error) {
        console.log("------", error);
        dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.response ? error.response.data : error });
    }
};

// export const updateProfileAction = (reqData) => async (dispatch) => {
//     dispatch({ type: UPDATE_PROFILE_REQUEST });
//     try {
//         const { data } = await axios.put(`${API_BASE_URL}/api/users/profile`, reqData, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//             }
//         });
//         dispatch({ type: UPDATE_PROFILE_SUCESS, payload: data });
//         console.log("profile updated", data);
//     } catch (error) {
//         console.error("Error updating profile:", error);
//         dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.response ? error.response.data : error });
//     }
// };