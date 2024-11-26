import { Avatar, Card, CardHeader } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { searchUser } from '../../redux/Auth/auth.action';


const SearchUser = () => {

    const [username, setUsername] = useState("");

    const dispatch = useDispatch();


    // const handleSearchUser = (e) =>{
    //     setUsername(e.target.value)
    //     console.log("Search user...");
    //     dispatch(searchUser(username))
    // };

    const handleSearchUser = (e) => {
        const query = e.target.value;
        setUsername(query); 
        if (query.trim()) {
            console.log("Search user...");
            dispatch(searchUser(query));
        }
    };

    const handleClick = (id) =>{
        console.log(id)
    }

    return(
        <div>
            <div className='py-5 relative'>
                <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' 
                placeholder='Search user...' 
                onChange={handleSearchUser} 
                type='text'/>

                {
                    username && (<Card className="absolute w-full z-10 top-[4.5rem] cursor-pointer">
                        
                        <CardHeader onClick={()=>{
                            handleClick();
                            setUsername("")
                        }}
                        avatar={<Avatar src='https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>}

                        title="Nguyen Phuoc Loc"
                        subheader={"nguyenphuocloc"}

                        />

                    </Card>

                )}

            </div>

            


        </div>
    )
}

export default SearchUser