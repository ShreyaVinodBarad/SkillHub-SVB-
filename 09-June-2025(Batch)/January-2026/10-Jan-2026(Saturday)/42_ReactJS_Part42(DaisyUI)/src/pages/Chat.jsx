import React from 'react'

const Chat = () => {
    const chatting = [
        { message: "Hi!", user: "Shreya" },
        { message: "Hello!", user: "Gouri" },
        { message: "How are you?", user: "Padma" },
        { message: "How are you doing?", user: "Vinod" }
    ]
    return (
        <div>
            {
                chatting.map(item => <ChatBubble
                    name={item.user}
                    message={item.message}
                    side={item.user === "Shreya" ? "left" : "right"}
                />)
            }
        </div>
    )
}

const ChatBubble = ({ name, message, side }) => {
    return <>
        <div className={`chat ${side === "left" ? "chat-start" : "chat-end"}`}>
            {/* 
            👆
            - DaisyUI chat container
            - Aligns message left or right based on side
            */}
            <div className="chat-image avatar">
                {/* 👆 Wrapper for user avatar (profile image) */}
                <div className='w-10 rounded-full'>
                    {/* 👆 Sets avatar size and makes it circular */}
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    />
                </div>
            </div>
            <div className="chat-header">
                {/* 👆 Header section of chat bubble */}
                {name}
                <time className="text-xs opacity-50">12:45</time>
                {/* 👆 Shows message time in small faded text */}
            </div>
            <div className="chat-bubble">
                {/* 👆 Main chat bubble container */}
                {message}
            </div>
            <div className="chat-footer opacity-50">
                {/* 👆 Footer section with lighter text */}
                Delivered
            </div>
        </div>
    </>
}

export default Chat