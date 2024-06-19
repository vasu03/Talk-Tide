// Importing required modules
import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async";

// Importing our App & its assets
import App from "./App.jsx";
import "./index.css";

// Creating a Root element & rendering the App into it
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
);
