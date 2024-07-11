// Importing required modules
import React, { useState } from "react";

// Importing custom components
import { sampleNotificationData } from "../sharedComponents/sampleData"
import NotificationItem from "../sharedComponents/NotificationItem";


// Creating the Notifications Page
const Notifications = () => {
	// Some states to handle Notification
	const [ notifications, setNotifications ] = useState(sampleNotificationData);
	const isLoadingAcceptFriendRequest = false;

	// function to handle the friend requests
	const handleFriendRequest = async ({ _id, isAccepted }) => {
		
	}

	// JSX to render the Notifications Page
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-2 md:px-0 py-4 w-11/12 md:w-1/2 h-2/3 rounded-lg bg-cyan-300 bg-opacity-20 backdrop-blur-lg" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>
			<h2 className="text-3xl text-center font-semibold text-white">Notifications</h2>
			{/* List of all the current Notifications */}
			<div className="w-full md:w-5/6 h-5/6 overflow-y-scroll relative">
				{
					notifications.length > 0 ? notifications?.map((notification) => (
						<div className="">
							<NotificationItem notification={notification} key={notification} handler={handleFriendRequest} isHandlerLoading={isLoadingAcceptFriendRequest} />
							<div className="border-b border-slate-500 m-1 w-11/12"></div>
						</div>
					)) : (
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
							No new Notifications.
						</div>
					)
				}
			</div>
		</div>
	);
};

// Exporting the Page
export default Notifications;