import React from "react";

const ChatMessage = () =>{

    return(
        <div className={`flex ${true? "justify-start" : "justify-end"} text-white`}>
            <div className={`p-1 ${false? "rounded-md": "ox-5  rounded-full" } bg-[#191c29]`}>
                
                {false && <img className="w-[12rem] h-[17rem] object-cover rounded-md" src="https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>}
                <p className={`${true?"py-2":"py-1"}`}>
                    message...
                </p>
            </div>
        </div>

    )

}

export default ChatMessage;