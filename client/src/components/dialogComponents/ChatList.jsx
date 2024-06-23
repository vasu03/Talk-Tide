// Importing required modules
import React from "react";

// Importing MUI assets
import { Stack } from "@mui/material";

// Importing custom components
import ChatItem from "../sharedComponents/ChatItem";


// Creating the ChatList Page with some props
const ChatList = ({
    width = "100%",
    chatId,
    chats = [],
    onlineUsers = [],
    newMessagesAlert = [{ chatId: "", count: 0 }],
    handleDeleteChat
}) => {
    // JSX to render the ChatItem Page
    return (
        <Stack width={width} direction={"column"} >
            {
                chats?.map((data, index) => {
                    const { avatar, _id, name, groupChat, members } = data;
                    const newMessageAlert = newMessagesAlert.find(
                        ({ chatId }) =>  chatId === _id 
                    );
                    const isOnline = members?.some((member) => onlineUsers.includes(_id));
                    return (
                        <ChatItem
                            key={_id}
                            index={index}
                            newMessageAlert={newMessageAlert}
                            isOnline={isOnline}
                            avatar={avatar}
                            name={name}
                            _id={_id}
                            isGroupChat={groupChat}
                            isSameSender={chatId === _id}
                            handleDeleteChat={handleDeleteChat}
                        />
                    )
                })
            }
        </Stack>
    );
};

// Exporting the Page
export default ChatList;