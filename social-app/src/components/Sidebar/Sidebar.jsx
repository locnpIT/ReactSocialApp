import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Card, Divider } from '@mui/material';
import { navigationMenu } from './SidebarNavigation';

import MoreVertIcon from '@mui/icons-material/MoreVert'

const Sidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

 
    console.log('navigationMenu in Sidebar:', navigationMenu);

    return (
        <Card className="card h-screen flex flex-col justify-between py-5">
            <div className="space-y-8 pl-5">
                <div>
                    <span className="logo font-bold text-xl">PhuocLocGroup Social</span>
                </div>
                <div className="space-y-8">
                    {Array.isArray(navigationMenu) && navigationMenu.map((item, index) => (
                        <div key={index} className="cursor-pointer flex space-x-3 items-center">
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
                            <p className="font-bold">NguyenPhuocLoc</p>
                            <p className="opacity-70">@phuocloc250</p>
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