import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserChatCard = () => {

    return (

        <Card >
             <CardHeader  avatar={
            <Avatar sx={{width:"3.5rem", height:"3.5rem", fontSize:"1.5rem", bgcolor:"#191c29", color:"rgb(88,199,250)"}} src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

            }
            
            action={<IconButton>
                <MoreHorizIcon/>
            </IconButton>}
            title="Nguyen Phuoc Loc"
            subheader={"new message"}
            >
                
            </CardHeader>
        </Card>

       

    )

}

export default UserChatCard;