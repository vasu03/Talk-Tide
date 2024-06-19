// Importing required modules
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Importing custom pages in a Lazy way to optimise performance
const Home = lazy(() => import("./pages/Home"));
const LogIn = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Importing custom components
import SecureRoute from "./components/authComponents/SecureRoute";

// Importing global states & initializong them
const user = true;			// will be used for dynamic routing

// Creating the React App
const App = () => {
	// JSX to render the App
	return (
		<BrowserRouter>
			<div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
				<Suspense fallback={<span className="loading loading-bars text-teal-400 h-12 w-12 font-light"></span>} >
					<Routes>
						<Route element={<SecureRoute user={user} />} >
							<Route path="/" element={<Home />} />
							<Route path="/chat/:chatId" element={<Chat />} />
							<Route path="/groups" element={<Groups />} />
						</Route>
						<Route element={<SecureRoute user={!user} redirect="/" />} >
							<Route path="/login" element={<LogIn />} />
							<Route path="/signup" element={<SignUp />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</div>
		</BrowserRouter>
	);
};

// Exporting the App
export default App;