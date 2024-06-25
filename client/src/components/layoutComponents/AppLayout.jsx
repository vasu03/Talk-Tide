// Importing required modules
import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

// Importing MUI assets
import { Grid } from "@mui/material";

// Importing our custom component
import Navbar from "../sharedComponents/Navbar";
import WebTitle from "../sharedComponents/WebTitle";
import ChatList from "../dialogComponents/ChatList";

import { sampleChatData } from "../sharedComponents/sampleData.js";

// Create the AppLayout component (Higher Order component)
const AppLayout = () => WrappedComponent => {

    // JSX to render the component
    return (props) => {
        // Initializing the react hooks
        const params = useParams();
        // Some varibales to handle props for childrens
        const chatId = params.chatId;

        // function to handle the deleting of a Chat => Used on Ctx menu (right click)
        const handleDeleteChat = async (e, _id, groupChat) => {
            e.preventDefault();

            try {
                toast.success("Delete Chat pressed.");
            } catch (error) {
                toast.error(error.message);
            } finally {

            }
        }

        return (
            <>
                <WebTitle />
                {/* The Navbar component available in all pages */}
                <Navbar />

                {/* The Grid layout -> By default MUI consider the window as a grid of 12-cols */}
                <Grid container height={"calc(100vh - 3.5rem)"}>
                    {/* The grid that contains the list of all Chats & Groups */}
                    <Grid
                        item
                        sm={4}
                        sx={{
                            display: { xs: "none", sm: "block" },
                            padding: ".5rem"
                        }}
                        height={"100%"}
                        className="bg-gray-900 text-gray-300 border-r border-gray-600" >
                        <ChatList chats={sampleChatData} chatId={chatId} handleDeleteChat={handleDeleteChat} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        height={"100%"}
                        className="bg-slate-800 text-gray-300" >
                        <WrappedComponent {...props} />
                    </Grid>
                </Grid>

            </>
        );
    };
};

// Exporting the component
export default AppLayout;