// Importing required modules
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";


// Importing MUI assets


// Importing custom components
import UserItem from "../sharedComponents/UserItem";
import { sampeUserData } from "../sharedComponents/sampleData";


// Creating the SearchBox Page
const SearchBox = () => {
	// Some states to handle searching
	const [search, setSearch] = useState("");
	const [ users, setUsers ] = useState(sampeUserData);
	let isLoadingSendFriendRequest = false;

	// function to handle searching
	const handleSearch = async (e) => {
		e.preventDefault();
	}

	// fucntion to handle adding a new friend
	const handleAddFriend = async (e, id) => {
		e.preventDefault();
		console.log(id);
	}

	// JSX to render the SearchBox Page
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-2 md:px-0 py-4 w-11/12 md:w-1/2 h-2/3 rounded-lg bg-cyan-300 bg-opacity-20 backdrop-blur-lg z-50 " style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
			<h2 className="text-3xl text-center font-semibold text-white">Find People</h2>
			{/* Input field for searching users */}
			<form onSubmit={handleSearch} className="w-full md:w-5/6 flex gap-2">
				<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." className="bg-transparent border border-slate-300 rounded-lg text-white w-full p-2 outline-none" />
				<button type="submit" className="shrink-0 border border-slate-300 p-2 rounded-lg text-white" >
					<BiSearchAlt />
				</button>
			</form>
			{/* List of all the available users */}
			<div className="w-full md:w-5/6 h-5/6 overflow-y-scroll">
				{
					users?.map((user) => (
						<div className="">
							<UserItem user={user} key={user._id} handler={handleAddFriend} isHandlerLoading={isLoadingSendFriendRequest} />
							<div className="border-b border-slate-500 m-1 w-11/12"></div>
						</div>
					))
				}
			</div>
		</div>
	);
};

// Exporting the Page
export default SearchBox;