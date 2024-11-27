import * as actionType from "./message.actionType"
import {api} from "../../config/api"

export const createMessage= (message) => async(dispatch) =>{

    dispatch({type:actionType.CREATE_MESSAGE_SUCCESS})
    try {
        const {data} = await api.post(`/api/messages/chat/${message.chatId}`, message);
        console.log("create message", data)
        dispatch({type:actionType.CREATE_MESSAGE_SUCCESS, payload:data})
        
    } catch (error) {

        console.log("CATCH ERROR ", error);
        dispatch({
            type:actionType.CREATE_MESSAGE_FAILUER, 
            payload:error
        })
        
    }

}

export const createChat= (chat) => async(dispatch) =>{

    dispatch({type:actionType.CREATE_CHAT_REQUEST})
    try {
        const {data} = await api.post(`/api/chats`, chat);
        console.log("create chats ", data)
        dispatch({type:actionType.CREATE_CHAT_SUCCESS, payload:data})
        
    } catch (error) {

        console.log("CATCH ERROR ", error);
        dispatch({
            type:actionType.CREATE_CHAT_FAILUER, 
            payload:error
        })
        
    }

}

export const getAllChats= () => async(dispatch) =>{

    dispatch({type:actionType.GET_ALL_CHATS_REQUEST})
    try {
        const {data} = await api.get(`/api/chats`);
        console.log("Get all chat ", data)
        dispatch({type:actionType.GET_ALL_CHATS_SUCCESS, payload:data})
        
    } catch (error) {

        console.log("CATCH ERROR ", error);
        dispatch({
            type:actionType.GET_ALL_CHATS_SUCCESS, 
            payload:error
        })
        
    }

}