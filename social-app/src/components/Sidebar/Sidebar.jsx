import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Card, Divider } from '@mui/material';
import { navigationMenu } from './SidebarNavigation';

import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const {auth}  = useSelector(store=>store);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (item) => {
        if(item.title === "Profile"){
            navigate(`/profile/${auth.user?.id}`)
        }
        if(item.title === "Home"){
            navigate("/")
        } 
        if(item.title === "Message"){
            navigate("/message")
        }
    }

 
    console.log('navigationMenu in Sidebar:', navigationMenu);

    return (
        <Card className="card h-screen flex flex-col justify-between py-5">
            <div className="space-y-8 pl-5">
                <div>
                    <span className="logo font-bold text-xl">PhuocLocGroup Social</span>
                </div>
                <div className="space-y-8">
                    {Array.isArray(navigationMenu) && navigationMenu.map((item, index) => (
                        <div onClick={()=>handleNavigate(item)}  key={index} className="cursor-pointer flex space-x-3 items-center">
                            {item.icon}
                            <p className="text-xl">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Divider />
                <div className="pl-5 flex items-center justify-between pt-5">
                    <div className="flex items-center space-x-3">
                        <Avatar src="https://example.com/avatar.jpg" />
                        <div>
                            <p className="font-bold">{auth.user?.firstName + " " + auth.user?.lastName}</p>
                            <p className="opacity-70">@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
                        </div>
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleOpen}
                    >
                        <MoreVertIcon/>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </Card>
    );
};

export default Sidebar;