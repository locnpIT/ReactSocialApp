import { Avatar, Card, CardHeader } from '@mui/material'
import React from 'react'


const SearchUser = () => {

    const handleSearchUser = () =>{
        console.log("Search user...")
    }

    const handleClick = (id) =>{
        console.log(id)
    }

    return(
        <div>
            <div className='py-5 relative'>
                <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 rounded-full' placeholder='Search user...' onChange={handleSearchUser} type='text'/>

            </div>

            {
                true && <Card>
                    
                    <CardHeader onClick={()=>{
                        handleClick();
                    }}
                    avatar={<Avatar src='https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>}

                    title="Nguyen Phuoc Loc"
                    subheader={"nguyenphuocloc"}

                    />

                </Card>

            }


        </div>
    )
}

export default SearchUser