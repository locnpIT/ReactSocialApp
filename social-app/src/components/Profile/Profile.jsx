import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React, { useState } from "react"; // Thêm useState để quản lý trạng thái
import { useParams } from "react-router-dom";
import PostCard from "../Post/PostCard";
import UserReelCard from "../Reels/UserReelCard";
import { useSelector } from "react-redux";

const tabs = [
    { value: "post", name: "Post" },
    { value: "reels", name: "Reels" },
    { value: "saved", name: "Saved" },
    { value: "repost", name: "Repost" }
];

const posts = [1, 1, 1, 1 ,1];
const reels = [1, 1, 1, 1, 1];

const savedPost = [1, 1, 1, 1, 1];


const Profile = () => {
    const { id } = useParams(); // Lấy tham số id từ URL

    // Sử dụng useState để quản lý giá trị của tab
    const [value, setValue] = useState("post");

    const {auth}  = useSelector(store=>store);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className="my-10 w-[70%]">
            <div className="rounded-md">
                <div className="h-[15rem]">
                    <img
                        className="w-full h-full rounded-t-md"
                        src="https://cdn.pixabay.com/photo/2023/12/11/12/03/exit-sign-8443453_1280.jpg"
                        alt=""
                    />
                </div>
                <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar
                        className="transform -translate-y-24"
                        sx={{ width: "10rem", height: "10rem" }}
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/453536952_1231090181241607_3482979049030780443_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEzGEObYW-0Xm2cdGiYStkfXfMGv5_lEJld8wa_n-UQmdGtsjSZdl8FtGeRgBTuog1xE0Gq2X1iG-iYDgZdO_FS&_nc_ohc=wYnxzYchKKQQ7kNvgEQa23i&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=A9lWjeKATjrGBo_Am1_N6Qw&oh=00_AYBMQm6IG3-_5894P9Teku-YcumOpgSlgLUuuvSVY7vFUw&oe=6719C0CC"
                    />
                    {true ? (
                        <Button sx={{ borderRadius: "20px" }} variant="outlined">
                            Edit Profile
                        </Button>
                    ) : (
                        <Button sx={{ borderRadius: "20px" }} variant="outlined">
                            Follow
                        </Button>
                    )}
                </div>
                <div className="p-5">
                    <div>
                        <h1 className="py-1 font-bold text-xl">{auth.user?.firstName + " " + auth.user?.lastName}</h1>
                        <p>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
                    </div>

                    <div className="flex gap-5 items-center py-3">
                        <span>41 posts</span>
                        <span>35 followers</span>
                        <span>5 following</span>
                    </div>

                    <div>
                        <p>Lorem ipsum sit amet</p>
                    </div>
                </div>

                <section>
                    <Box sx={{ width: "100%", borderBottom:1, borderColor: "divider"}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="wrapped label tabs example"
                        >
                            {tabs.map((item) => (
                                <Tab key={item.value} value={item.value} label={item.name} wrapped/>
                            ))}
                        </Tabs>
                    </Box>
                    
                    <div className="flex justify-center">
                        {value ==="post" ? (<div className="space-y-5 w-[70%] my-10"> 
                            {posts.map((item) => 
                                <div className="border border-slate-100"> <PostCard/> </div>
                            )}
                            
                        </div>) :value === "reels"? 
                        (<div className="my-10 flex justify-center flex-wrap gap-2">
                            {reels.map((item) => <UserReelCard/>)}
                        </div>) : value === "saved"? 
                        (<div className="space-y-5 w-[100%] my-10"> 
                            {posts.map((item) => 
                                <div className="border border-slate-100"> <PostCard/> </div>
                            )}
                            
                        </div>) : (
                            <div>
                                Repost
                            </div>
                        )}

                    </div>


                </section>
            </div>
        </Card>
    );
};

export default Profile;