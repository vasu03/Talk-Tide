// Importing required modules
import React, { memo } from "react";
import { BiPlusCircle } from "react-icons/bi";


// Importing MUI assets


// Importing custom components


// Creating the UserItem Page
const UserItem = () => {
	// JSX to render the UserItem Page
	return (
		<div className="w-11/12 flex items-center justify-between text-slate-50 rounded-lg p-2 hover:bg-slate-500 hover:scale-95" style={{zIndex: "100"}} >
			{/* User Details */}
			<div className=" flex items-center justify-start gap-3">
				{/* User profile pic */}
				<div className="avatar shrink-0">
					<div className="w-10 rounded-full bg-slate-600">
						<img src="https://avatar.iran.liara.run/public" alt="DP" />
					</div>
				</div>
				{/* Username & Fullname */}
				<div className="flex flex-col">
					<h3 className="font-light">@username</h3>
					<h6 className="text-xs font-extralight">Full name</h6>
				</div>
			</div>
			{/* Button to Add as Friend */}
			<button type="submit" className="text-2xl text-green-400">
				<BiPlusCircle />
			</button>
		</div>
	);
};

// Exporting the Page
export default memo(UserItem);