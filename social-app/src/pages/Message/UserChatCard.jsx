import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from "react-redux";




const UserChatCard = ({ chat }) => {
    const { message, auth } = useSelector(store => store);

    // Kiểm tra nếu dữ liệu không tồn tại
    if (!auth?.user || !chat?.users || chat.users.length < 2) {
        return <Card><CardHeader title="Invalid chat data" /></Card>;
    }


    const otherUser = auth.user.id === chat.users[0]?.id 
        ? chat.users[1] 
        : chat.users[0];

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            width: "3.5rem",
                            height: "3.5rem",
                            fontSize: "1.5rem",
                            bgcolor: "#191c29",
                            color: "rgb(88,199,250)",
                        }}
                        src="https://commons.wikimedia.org/wiki/File:Sample_User_Icon.png"
                    />
                }
                action={
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={`${otherUser?.firstName || "Unknown"} ${
                    otherUser?.lastName || "User"
                }`}
                subheader="new message"
            />
        </Card>
    );
};

export default UserChatCard;
