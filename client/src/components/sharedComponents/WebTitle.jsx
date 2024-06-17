// Importing required modules
import React from "react";
import { Helmet } from "react-helmet-async";

// Create the WebTitle component
const WebTitle = ({ title="Talk Tide", description="A realtime Chat app." }) => {
    // JSX to render the component
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Helmet>
    );
};

// Exporting the component
export default WebTitle;