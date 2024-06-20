// Importing required modules
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Importing custom hooks
import useSignup from "../hooks/authHooks/useSignup";

// Importing Icons
import { BiAt, BiKey, BiLock, BiEnvelope, BiSolidUser   } from "react-icons/bi";


// Creating the Signup page
const Signup = () => {
	// States to handle the Signup form
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	// Initialising the custom hook for Signup
	const { loading, SignUp } = useSignup();

	// function to handle the submission of Signup form


	// JSX to render the Signup Page
	return (
		<div className="py-6 self-center flex flex-col gap-4 items-center justify-between w-80 bg-slate-800 text-gray-100 sm:mx-auto sm:px-3 sm:min-w-96 rounded-xl">
			<h2 className="text-3xl font-extrabold tracking-wide font-mono">Sign Up</h2>
			<form className="h-full w-full flex flex-col gap-5 p-1 items-center justify-center rounded-xl">
				<div className="w-5/6 px-3 py-1 gap-2 flex items-center justify-between border-b border-slate-500">
					<BiSolidUser className="text-2xl text-slate-400" />
					<input type="text" placeholder="Full Name" className="w-full flex-1 bg-transparent p-2 text-gray-200 text-sm outline-none" />
				</div>
				<div className="w-5/6 px-3 py-1 gap-2 flex items-center justify-between border-b border-slate-500">
					<BiAt className="text-2xl text-slate-400" />
					<input type="text" placeholder="Username" className="w-full flex-1 bg-transparent p-2 text-gray-200 text-sm outline-none" />
				</div>
				<div className="w-5/6 px-3 py-1 gap-2 flex items-center justify-between border-b border-slate-500">
					<BiEnvelope className="text-2xl text-slate-400" />
					<input type="email" placeholder="Email" className="w-full flex-1 bg-transparent p-2 text-gray-200 text-sm outline-none" />
				</div>
				<div className="w-5/6 px-3 py-1 gap-2 flex items-center justify-between border-b border-slate-500">
					<BiKey className="text-2xl text-slate-400 -rotate-45" />
					<input type="password" placeholder="Password" className="w-full flex-1 bg-transparent p-2 text-gray-200 text-sm outline-none" />
				</div>
				<div className="w-5/6 px-3 py-1 gap-2 flex items-center justify-between border-b border-slate-500">
					<BiLock className="text-2xl text-slate-400" />
					<input type="password" placeholder="Confirm Password" className="w-full flex-1 bg-transparent p-2 text-gray-200 text-sm outline-none" />
				</div>
				<button
					type="submit"
					disabled={loading}
					className="btn btn-sm bg-opacity-70 bg-gradient-to-tr from-teal-500 via-pink-200 to-teal-800 text-gray-800 sm:btn-wide w-40">
					{!loading ? "Signup" : (
						<span className="loading loading-spinner"></span>
					)}
				</button>
			</form>
			<div className="flex flex-col items-center text-xs mt-1 sm:flex-row sm:gap-3">
				<span>Already have a Account? </span>
				<Link to="/login" className="text-cyan-400 underline underline-offset-2" >LogIn here..</Link>
			</div>
		</div>
	);
};

// Exporting the Page
export default Signup;