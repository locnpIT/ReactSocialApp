import { Avatar } from "@mui/material";
import React from "react";

const StoryCircle = () =>{

    return (
        <div>
            <div className="flex flex-col items-center mr-4 cursor-pointer">
                    <Avatar 
                        sx={{width:"5rem", height:"5rem"}}
                        src="https://example.com/avatar.jpg" 
                    >
                      
                    </Avatar>
                    <p>PhuocLoc...</p>

                </div>
        </div>
    )
}

export default StoryCircle