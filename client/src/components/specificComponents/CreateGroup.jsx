// Importing required modules
import React, { useState } from "react";

import { TextField } from "@mui/material"

// Importing react icons
import { BiSearchAlt } from "react-icons/bi";

// Importing custom components
import UserItem from "../sharedComponents/UserItem";
import { sampeUserData } from "../sharedComponents/sampleData";

// Creating the CreateGroup Page
const CreateGroup = () => {
	// Some states to handle Creating of new Group
	const [groupName, setGroupName] = useState("");
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState(sampeUserData);
	const [selectedMembers, setSelectedMembers] = useState([]);

	// Some variable to handle creating of group
	let isLoadingCreateGroup = false;

	// function to handle searching
	const handleSearch = async (e) => {
		e.preventDefault();
	}

	// function to handle the friend requests
	const handleSelectingGroupMembers = async (_id) => {
		// set the member into array on clicking add, only if its not already selected
		// If already selected then again clicking will remove it
		setSelectedMembers((prev) => prev.includes(_id) ? prev.filter((key) => key !== _id) : [...prev, _id]);
	}

	// function to handle the creation of group
	const handleCreateGroup = async (e) => {
		e.preventDefault();
	}

	// const function to handle close create group box
	const handleCloseNewGroupBox = async () => {

	}

	// JSX to render the CreateGroup Page
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-2 md:px-0 py-4 w-11/12 md:w-1/2 h-2/3 rounded-lg bg-cyan-300 bg-opacity-20 backdrop-blur-lg" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>
			<h2 className="text-3xl text-center font-semibold text-white">New Group</h2>
			<input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Group Name" className="bg-transparent border border-slate-300 rounded-lg text-white w-full md:w-5/6 p-2 outline-none" />
			{/* Input field for searching users */}
			<form onSubmit={handleSearch} className="w-full md:w-5/6 flex gap-2">
				<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." className="bg-transparent border border-slate-300 rounded-lg text-white w-full p-2 outline-none" />
				<button type="submit" className="shrink-0 border border-slate-300 p-2 rounded-lg text-white" >
					<BiSearchAlt />
				</button>
			</form>
			{/* List of all the current Notifications */}
			<div className="w-full md:w-5/6 h-5/6 overflow-y-scroll relative">
				{
					users?.map((user) => (
						<div className="">
							<UserItem user={user} key={user._id} handler={handleSelectingGroupMembers} isHandlerLoading={isLoadingCreateGroup} isAdded={selectedMembers.includes(user._id)} />
							<div className="border-b border-slate-500 m-1 w-11/12"></div>
						</div>
					))
				}
			</div>
			{/* Buttons to create a group */}
			<div className="flex items-center justify-center gap-2 text-white">
				<button className="flex items-center justify-center bg-red-300 p-2 rounded-lg bg-opacity-50 hover:bg-opacity-65" type="submit" onClick={handleCloseNewGroupBox} >
					Cancel
				</button>
				<button className="flex items-center justify-center bg-green-300 p-2 rounded-lg bg-opacity-50 hover:bg-opacity-65" type="submit" onClick={handleCreateGroup} >
					Create
				</button>
			</div>
		</div>
	);
};

// Exporting the Page
export default CreateGroup;