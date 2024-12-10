import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { createCommentAction, likePostAction } from '../../redux/Post/post.action';
import { useDispatch, useSelector } from 'react-redux';
import { isLikedByReqUser } from '../../util/isLikedByReqUser';

const PostCard = ({ item }) => {

    const [showComments, setShowComments] = useState(false);
    const dispatch = useDispatch();

    const {post, auth} = useSelector(store => store)

    const handleShowComment = () => setShowComments(!showComments);

    const handleCreateComment = (content) => {
        const reqData = {
            postId:item.id,
            data:{
                content
            }

        }
        dispatch(createCommentAction(reqData))
    }

    const handleLikePost = () => {
        dispatch(likePostAction(item.id))
    }

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {item.user?.firstName?.[0] || "R"}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={item.user.firstName + " " + item.user.lastName}
                subheader={"@"+ item.user.firstName.toLowerCase() + "_" + item.user.lastName.toLowerCase()}
            
            />
            {/* <CardMedia
                component="img"
                height="100"
                image={item.image}
                alt="Paella dish"
            /> */}
            <img className='w-full max-h-[30rem] object-cover object-top' src={item.image} alt=""/>
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.caption}
                </Typography>
            </CardContent>
            <CardActions className='flex justify-between' disableSpacing>
                <div>
                    <IconButton onClick={handleLikePost}>
                        {isLikedByReqUser(auth.user.id, item) ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
                    </IconButton>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>

                    <IconButton onClick={handleShowComment}>
                        <ChatBubbleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <BookmarkIcon />
                    </IconButton>
                </div>
            </CardActions>

           {showComments &&  <section>
                <div className="flex items-center space-x-5 mx-3 my-5">
                    <Avatar sx={{}} />
                    <input onKeyPress={(e) => {
                        if(e.key ==="Enter"){
                            handleCreateComment(e.target.value)
                            console.log("Enter press --------", e.target.value)
                        }
                    }} className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
                         type="text" placeholder='write your comment...'/>

                </div>
                <Divider/>
                <div className="mx-3 my-5 text-xs space-y-4">
                    {item.comments?.map((comment, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>
                                {comment.user?.firstName[0] || "?"}
                            </Avatar>
                            <div className="flex flex-col">
                                <p className="font-semibold">
                                    {comment.user
                                        ? `${comment.user.firstName} ${comment.user.lastName}`
                                        : "Unknown User"}
                                </p>
                                <p className="text-gray-600">{comment.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                

            </section>}

        </Card>
    );
};

export default PostCard;