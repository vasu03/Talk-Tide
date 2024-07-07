// Importing required modules
import React, { memo } from "react";
import moment from "moment";

// Importing MUI assets
import { Box, Typography } from "@mui/material";

// Importing custom components
import RenderAttachedFileItem from "./RenderAttachedFileItem";

// Importing custom util features
import { fileFormat } from "../../utils/features";


// Creating the MessageItem component
const MessageItem = ({ message, user }) => {
    // Destructuring incoming msg data
    const { sender, content, attachments = [], createdAt } = message;

    // Some variable to handle message display
    const isSameSender = sender?._id === user._id
    const chatClass = isSameSender ? "chat-end" : "chat-start";
    const chatColor = isSameSender ? "bg-gray-600" : "bg-gray-700";
    const timeAgo = moment(createdAt).fromNow();

    // JSX to render the component
    return (
        <div className={`chat ${chatClass} `}>
            <div className={`chat-bubble ${chatColor} flex flex-col py-2 px-4 rounded-md`}>
                {/* Message sender name */}
                {!isSameSender &&
                    <Typography variant="caption" fontSize={"12px"} className="text-cyan-300 font-medium" >
                        {sender.name}
                    </Typography>
                }

                {/* Message content/text */}
                { content && (
                    <p>{content}</p>
                ) }
                
                {/* File Attachment */}
                {attachments.length > 0 && (
                    attachments?.map((attachment, idx) => {
                        const url = attachment.url;
                        const file = fileFormat(url);

                        return <Box key={idx}>
                            <a href={url} target="_blank" download className="text-gray-300">
                                {RenderAttachedFileItem(file, url)}
                            </a>
                        </Box>
                    })
                )}
            </div>

            {/* Message time */}
            {timeAgo && <Typography variant="caption" fontSize={".5rem"} className="chat-footer text-gray-400">{timeAgo}</Typography>}
        </div>
    );
};

// Exporting the component
export default memo(MessageItem);