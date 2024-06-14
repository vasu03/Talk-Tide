// Importing required modules
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing custom pages in a Lazy way to optimise performance
const Home = lazy(() => import("./pages/Home"));
const LogIn = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));


// Creating the React App
const App = () => {
	// JSX to render the App
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/login" element={ <LogIn /> } />
				<Route path="/signup" element={ <SignUp /> } />
				<Route path="/groups" element={ <Groups /> } />
				<Route path="/chat/:chatId" element={ <Chat /> } />
			</Routes>
		</BrowserRouter>
	);
};

// Exporting the App
export default App;