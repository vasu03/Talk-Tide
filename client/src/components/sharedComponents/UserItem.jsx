// Importing required modules
import React, { memo } from "react";

// Importing react icons
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";


// Creating the UserItem Page
const UserItem = ({ user, handler, isHandlerLoading, isAdded=false }) => {
	// Destructuring the incoming data
	const { username, fullName, _id, avatar } = user;

	// JSX to render the UserItem Page
	return (
		<div className="w-11/12 flex items-center justify-between text-slate-50 rounded-lg p-2 hover:bg-slate-500 hover:bg-opacity-60 cursor-pointer" style={{zIndex: "100"}} >
			{/* User Details */}
			<div className=" flex items-center justify-start gap-3">
				{/* User profile pic */}
				<div className="avatar shrink-0">
					<div className="w-10 rounded-full bg-slate-600">
						<img src={avatar} alt="DP" />
					</div>
				</div>
				{/* Username & Fullname */}
				<div className="flex flex-col">
					<h3 className="font-light">@{username}</h3>
					<h6 className="text-xs font-extralight">{fullName || "Full name" }</h6>
				</div>
			</div>
			{/* Button to send a Friend Request / add to group */}
			<button type="submit"  onClick={(e) => handler(_id)} disabled={isHandlerLoading}>
				{ isAdded ? 
					( <BiMinusCircle className="text-2xl text-red-500"/> ) : 
						(<BiPlusCircle className="text-2xl text-green-500"/>) 
				}
			</button>
		</div>
	);
};

// Exporting the component 
// by wrapping it in memo so unitl any change in its prop occurs it won't reload
export default memo(UserItem);