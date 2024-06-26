// Importing required modules
import React, { memo } from "react";
import { AppBar, Toolbar, Tooltip } from "@mui/material";

// Importing react icons
import { BiCheckCircle, BiXCircle } from "react-icons/bi";


// Creating the NotificationItem Page
const NotificationItem = ({ notification, handler, isHandlerLoading }) => {
    // Destructuring the incoming data
    const { sender, _id } = notification;

    // JSX to render the NotificationItem Page
    return (
        <div className="w-11/12 flex items-center justify-between text-slate-50 rounded-lg p-2 hover:bg-slate-500 cursor-pointer" style={{ zIndex: "100" }} >
            {/* Notification Details */}
            <div className=" flex items-center justify-start gap-3">
                {/* Sender user profile pic */}
                <div className="avatar shrink-0">
                    <div className="w-10 rounded-full bg-slate-600">
                        <img src={sender.avatar} alt="DP" />
                    </div>
                </div>
                {/* Sender username & Fullname */}
                <div className="flex flex-col">
                    <h3 className="font-light">@{sender.username}</h3>
                    <p className="text-xs font-extralight">sent you a friend request...</p>
                </div>
            </div>
            {/* Buttons to Add / Reject Sender as Friend */}
            <div className="flex items-center justify-center gap-2">
                <button type="submit" onClick={(e) => handler({ _id, accept: true })} disabled={isHandlerLoading} >
                    <BiCheckCircle className="text-2xl text-green-400" />
                </button>
                <button type="submit" onClick={(e) => handler({ _id, accept: false })} disabled={isHandlerLoading}>
                    <BiXCircle className="text-2xl text-red-400" />
                </button>
            </div>
        </div>
    );
};

// Exporting the Page
export default memo(NotificationItem);