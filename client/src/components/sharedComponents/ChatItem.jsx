// Importing required modules
import React, { memo } from "react";
import { Link } from "react-router-dom";

// Importing MUI assets
import { Stack } from "@mui/material";


// Creating the ChatItem Page
const ChatItem = ({
    avatar = [],
    name,
    _id,
    isGroupChat = false,
    isSameSender,
    isOnline,
    newMessageAlert=[],
    index = 0,
    handleDeleteChat
}) => {
    // JSX to render the ChatItem Page
    return (
        <Link
            to={`/chat/${_id}`}
            onContextMenu={(e) => handleDeleteChat(e, _id, isGroupChat)}
            className="text-inherit p-1 border-b border-slate-600"
        >
            <div className={`
                p-2
                gap-4
                mt-1
                mb-1
                relative
                flex 
                items-center 
                justify-start 
                hover:bg-slate-700
                rounded-lg
                ${isSameSender ? "bg-slate-700" : "bg-transparent"}
                ${isSameSender ? "text-cyan-200" : "text-slate-100"}`
            }>
                {/* User profile pic */}
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full bg-slate-600">
                        <img src="https://avatar.iran.liara.run/public" alt="DP" />
                    </div>
                </div>
                <Stack>
                    <h3>{name}</h3>
                    {newMessageAlert && (
                        <p className="text-xs text-slate-400">+{newMessageAlert.count} New Messages</p>
                    )}
                </Stack>
            </div>
        </Link>
    );
};

// Exporting the Page
export default memo(ChatItem);