// Importing required modules
import React from "react";


// Importing MUI assets


// Importing custom components
import AppLayout from "../components/layoutComponents/AppLayout";

// Creating the Home Page
const Home = () => {
	// JSX to render the Home Page
	return (
		<div className="flex flex-col text-center items-center justify-center w-full h-full text-lg p-3">
			<p>Welcome to Talk Tide...</p>
			<p>Select a conversation to start chatting with your friends....</p>
		</div>
	);
};

// Exporting the Page with the Layout component
export default AppLayout()(Home);