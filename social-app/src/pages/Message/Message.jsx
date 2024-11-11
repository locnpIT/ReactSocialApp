import { Avatar, Grid, IconButton } from "@mui/material"
import React from "react"
import WestIcon from '@mui/icons-material/West';
import SearchUser from './../../components/SearchUser/SearchUser';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideoCall from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import "./Message.css"
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";

const Message = () => {

    const handleSelectImage = () =>{
        console.log("Handle select image")
    }

    return (
        <div>
            <Grid container className='h-screen overflow-y-hidden'>
                <Grid className='px-5' item xs={3}>
                    <div className="flex h-full justify-between space-x-2">

                        <div className="w-full">
                            <div className="flex space-x-4 items-center py-5">
                                <WestIcon/>
                                <h1 className="text-xl font-bold">
                                    Home
                                </h1>

                            </div>

                            <div className="h-[83vh]">
                                
                                <div className="">
                                    <SearchUser/>
                                
                                </div>

                                <div className="h-full space-y-4 mt-5 overflow-y-scroll hideScrollbar">
                                    <UserChatCard/>
                                </div>
                            
                            </div>
                        </div>
                        

                    </div>
                </Grid>

                <Grid className="h-full" item xs={9}>
                    <div>
                        
                        <div className="flex justify-between items-center border-1 p-5">
                    
                            <div className="flex items-center space-x-3">
                                
                                <Avatar src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                                <p>Phuoc Loc Nguyen</p>

                            </div>

                            <div className="flex space-x-3">
                                <IconButton>
                                    <AddIcCallIcon/>
                                </IconButton>

                                <IconButton>
                                    <VideoCall/>
                                </IconButton>

                            </div>
                        </div>

                        <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
                            
                            <ChatMessage/>

                        </div>

                    </div>

                    <div className="sticky bottom-0 border-l">
                        <div className="py-5 flex items-center justify-center space-x-5">
                            <input className="bg-transparent border border-[#3b40544] rounded-full w-[90%] py-3 px-5" placeholder="Type message..." type="text" />

                            <div>
                                <input type="file" accept="image/*" onChange={handleSelectImage} className="hidden" id="image-input" />
                                   
                                    <label htmlFor="image-input">
                                        <AddPhotoAlternateIcon/>
                                    </label>
                                

                            </div>

                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>
    )

}


export default Message