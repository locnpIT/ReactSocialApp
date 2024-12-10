import React from "react";
import SearchUser from "../SearchUser/SearchUser";
import PopularUserCard from "./PopularUserCard";
import { Card } from "@mui/material";

const popularUsers = [
    { name: "Nguyễn Phước Lộc", username: "phuocloc240" },
    { name: "Nguyễn Tấn Thuận", username: "NTTUTE" },
    { name: "Lê Văn Quý", username: "quycute73" },
    { name: "Nguyễn Quang Ninh", username: "Ninh75" },
    { name: "Nguyễn Tấn Trần Minh Khang", username: "nttmk_uit" },
];

const HomeRight = () => {
    return (
        <div className="pr-5">
            <SearchUser />
            <Card className="p-5">
                <div className="flex justify-between py-5 items-center">
                    <p className="font-semibold opacity-70">Suggestions for you</p>
                    <p className="text-xs font-semibold opacity-95">View All</p>
                </div>
                <div className="">
                    {popularUsers.map((user, index) => (
                        <PopularUserCard 
                            key={index} 
                            name={user.name} 
                            username={user.username} 
                        />
                    ))}
                </div>
            </Card>
        </div>
    )
}

export default HomeRight
