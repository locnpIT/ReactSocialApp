import { Avatar, Button, CardHeader } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const PopularUserCard = ({ name, username }) => {
    return (
        <div>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {name.charAt(0)}
                    </Avatar>
                }
                action={
                    <Button size='small'>
                        Follow
                    </Button>
                }
                title={name}
                subheader={`@${username}`}
            />
        </div>
    )
}

export default PopularUserCard
