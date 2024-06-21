// Importing required modules
import React, { Suspense, lazy, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing MUI assets
import { Box, AppBar, Toolbar, Tooltip, IconButton } from "@mui/material";

// Importing custom components
const SearchBox = lazy(() => import("../dialogComponents/SearchBox"));
const Notifications = lazy(() => import("../dialogComponents/Notifications"));
const CreateGroup = lazy(() => import("../dialogComponents/CreateGroup"));

// Importing react-icons
import { BiMenu, BiGroup, BiLogOut, BiSearchAlt, BiPlusCircle, BiDotsVerticalRounded, BiUserCircle, BiBell } from "react-icons/bi";
import { WiTsunami } from "react-icons/wi";

// Create the Navbar component
const Navbar = () => {
    // Initialization of hooks
    const navigate = useNavigate();

    // Some states to be utilised in handler functions
    const [ isMobile, setIsMobile ] = useState(false);
    const [ isSearch, setIsSearch ] = useState(false);
    const [ isNotification, setIsNotification ] = useState(false);
    const [ isCreateGroup, setIsCreateGroup ] = useState(false);

    // Function to handle the display of Sidebar/Drawer in mobile screens
    const handleMobileSideDrawer = (e) => {

    }

    // Function to handle the opening of Search Box
    const openSearchBox = (e) => {
        setIsSearch(true);

    }

    // Function to handle the opening of Notifications
    const openNotificationBox = (e) => {
        setIsNotification(true);
    }

    // Function to handle the opening of Create new Group Box
    const openCreateNewGroupBox = (e) => {
        setIsCreateGroup(true);
    }

    // Function to handle navigation to Manage groups page
    const navigateToManageGroups = (e) => {
        navigate("/groups");
    }

    // Function to handle navigation to User profile 
    const navigateToProfile = (e) => {
        navigate("/profile");
    }

    // Function to handle the Logout user
    const handleLogout = async (e) => {
        e.preventDefault();
    }

    // JSX to render the component
    return (
        <>
            <Box
                height={"3.5rem"}
                width={"100%"}
                className="border-b border-gray-400 bg-gray-900 shadow-md shadow-gray-700 z-50"
            >
                <AppBar position="static" sx={{ bgcolor: "transparent" }} className="h-full w-full p-0">
                    <Toolbar className="flex items-center justify-between w-full">
                        {/* Btn to open Sidebar/Drawer */}
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconBtn title={"Open Sidebar"} icon={<BiMenu className="text-gray-400" />} eventListener={handleMobileSideDrawer} />
                        </Box>
                        <span className="flex items-center justify-center gap-1">
                            <span><WiTsunami className="text-5xl text-cyan-400" /></span>
                            <h3 className="text-2xl tracking-wider font-semibold text-teal-200">Talk Tide</h3>
                        </span>
                        {/* Linked Icons Container */}
                        <Box sx={{ display: { xs: "none", sm: "block" } }} className="" >
                            <IconBtn title={"Profile"} icon={<BiUserCircle className="text-teal-100" />} eventListener={navigateToProfile} />
                            <IconBtn title={"Notifications"} icon={<BiBell className="text-teal-100" />} eventListener={openNotificationBox} />
                            <IconBtn title={"Search"} icon={<BiSearchAlt className="text-teal-100" />} eventListener={openSearchBox} />
                            <IconBtn title={"New Group"} icon={<BiPlusCircle className="text-teal-100" />} eventListener={openCreateNewGroupBox} />
                            <IconBtn title={"Manage Groups"} icon={<BiGroup className="text-teal-100" />} eventListener={navigateToManageGroups} />
                            <IconBtn title={"Logout"} icon={<BiLogOut className="text-teal-100 rotate-180" />} eventListener={handleLogout} />
                        </Box>
                        <Box sx={{ display: { xs: "block", sm: "none" } }} className="dropdown dropdown-end">
                            <div className="border-0">
                                <IconBtn title={"Open Menu"} icon={<BiDotsVerticalRounded className="text-gray-400" />} />
                            </div>
                            <Box className="dropdown-content z-49 menu p-2 shadow bg-gray-900 rounded-md w-44">
                                <IconBtn title={"Profile"} icon={<BiUserCircle className="text-teal-100" />} text={"Profile"} eventListener={navigateToProfile} />
                                <IconBtn title={"Notifications"} icon={<BiBell className="text-teal-100" />} text={"Notifications"} eventListener={openNotificationBox} />
                                <IconBtn title={"Search"} icon={<BiSearchAlt className="text-teal-100" />} text={"Search"} eventListener={openSearchBox} />
                                <IconBtn title={"New Group"} icon={<BiPlusCircle className="text-teal-100" />} text={"New Group"} eventListener={openCreateNewGroupBox} />
                                <IconBtn title={"Manage Groups"} icon={<BiGroup className="text-teal-100" />} text={"Manage Groups"} eventListener={navigateToManageGroups} />
                                <IconBtn title={"Logout"} icon={<BiLogOut className="text-teal-100 rotate-180" />} text={"Logout"} eventListener={handleLogout} />
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>


            {/* Load the below components only when they are needed otherwise not */}

            {/* If the Search is selected then show Search box */}
            { isSearch && (
                <Suspense fallback={<div>Loading...</div>} >
                    <SearchBox />
                </Suspense>
            ) }

            {/* If the Notification is selected then show Notifications box */}
            { isNotification && (
                <Suspense fallback={<div>Loading...</div>} >
                    <Notifications />
                </Suspense>
            ) }

            {/* If the CreateGroup is selected then show Create Group box */}
            { isCreateGroup && (
                <Suspense fallback={<div>Loading...</div>} >
                    <CreateGroup />
                </Suspense>
            ) }
        </>
    );
};


// A helper component to achieve DRY for creating icons
const IconBtn = ({ title, icon, eventListener, text }) => {
    return (
        <Tooltip title={title} className="">
            <IconButton onClick={eventListener} sx={{
                justifyContent: "start",
                gap: "0rem",
                padding: "6px"
            }} >
                {icon}
                <p className="text-gray-400 text-xs ml-2">{text}</p>
            </IconButton>
        </Tooltip>
    );
};


// Exporting the component
export default Navbar;


// // MUI Screen sizes // //
// xs:: extra-small: 0px /+
// sm:: small : 600px /+
// md:: medium : 900px /+
// lg:: large : 1200px /+
// xl:: extra large : 1536px /+ 