// Importing required modules
import React, { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Importing MUI assets
import { Stack } from "@mui/material";

// Importing react icons
import { BiArrowBack, BiPaperclip, BiSolidPaperPlane } from "react-icons/bi";

// Importing custom components
import AppLayout from "../components/layoutComponents/AppLayout";
import AttachFileMenu from "../components/dialogComponents/AttachFileMenu";
import { sampleMessageData } from "../components/sharedComponents/sampleData";
import MessageItem from "../components/sharedComponents/MessageItem";


// Creating the Chat Page
const Chat = () => {
	const chatContainerRef = useRef(null);

	// Some states handling messages
	const user = {
		_id: "6dsgc7wgefwoic712",
		name: "Mafia"
	}
	const [ messages, setMessages ] = useState(sampleMessageData);

	// JSX to render the Chat Page
	return (
		<Fragment>
			{/* Chat Header */}
			<div className="flex items-center justify-start mx-auto p-4 border-b border-gray-700" style={{ width: "98%", height: "9%" }}>
				<div className="flex items-center justify-center text-lg gap-3">
					<Link to={"/"} className="flex items-center justify-center">
						<BiArrowBack />
					</Link>
					{/* User profile */}
					<div className="flex items-center justify-center">
						<div className="avatar shrink-0">
							<div className="w-10 rounded-full bg-gray-600">
								<img src="" alt="DP" />
							</div>
						</div>
					</div>
					{/* User details */}
					<div className="flex flex-col">
						<h6 className="text-md font-light">Full name</h6>
					</div>
				</div>
			</div>

			{/* Messages Container */}
			<Stack
				ref={chatContainerRef}
				height={"80%"}
				width={"98%"}
				borderBottom={"1px solid #374151"}
				margin={"auto"}
				marginTop={"0.25rem"}
				sx={{
					overflowX: "hidden",
					overflowY: "auto"
				}}
			>
				{ messages?.map((msg) => (
					<MessageItem key={msg._id} message={msg} user={user} />
				)) }
			</Stack>

			{/* Message Input box */}
			<div className="flex items-center justify-between gap-1 sm:gap-2 mx-auto mt-1 sm:p-1 px-1 rounded-md" style={{ width: "98%", height: "8%" }}>
				<div className="shrink-0 rounded-md">
					<BiPaperclip className="text-2xl text-gray-400 -rotate-45" />
				</div>
				<form className="flex items-center justify-center gap-1 flex-1 w-full h-full rounded-md border border-gray-600 sm:border-0">
					<input type="text" className="flex-1 shrink-0 px-1 h-full sm:px-3 bg-transparent border-0 border-gray-600 sm:border rounded-md outline-none" placeholder="Message here..." />
					<button type="submit" className="flex items-center justify-center shrink-0 h-full p-2 text-xl rounded-md border-0 border-gray-600 sm:border">
						<BiSolidPaperPlane className="text-teal-300" />
					</button>
				</form>
			</div>

			{/* Attach file dialog box */}
			<AttachFileMenu />

		</Fragment>
	);
};

// Exporting the Page
export default AppLayout()(Chat);