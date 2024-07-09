// Importing required modules
import React from "react";

// Importing MUI assets
import { IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";


// Creating the NotFound Page
const NotFound = () => {
	// JSX to render the NotFound Page
	return (
		<>
			<Typography variant="h4" className="text-center">Oops!! 😕<br/>⚠️ Error: 404 <br/> Page Not Found 🚫</Typography>
			<Tooltip title="Back to Home">
				<IconButton>
					<Link to={"/"}>
						<BiHome className="text-gray-100 mt-4 text-6xl border p-1 rounded-full bg-slate-700 border-slate-700 hover:bg-slate-600" />
					</Link>
				</IconButton>
			</Tooltip>
		</>
	);
};

// Exporting the Page
export default NotFound;