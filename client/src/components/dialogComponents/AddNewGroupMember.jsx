// Importing required modules
import React, { useState } from "react";

// Importing MUI assets
import { Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";

// Importing react-icons
import { BiCheck } from "react-icons/bi";

// Importing custom components
import { sampeUserData } from "../sharedComponents/sampleData";
import UserItem from "../sharedComponents/UserItem";


// Creating AddNewGroupMember component
const AddNewGroupMember = ({ handleOpen, addMember, isLoadingAddNewMember, chatID }) => {
    // Some states to handle Adding new members
    const [availabeMembers, setAvailableMembers] = useState(sampeUserData);
    const [selectedMembers, setSelectedMembers] = useState([]);

    // function to handle closing of the dialog
    const handleClose = () => {  }

    // function to handle the selection of members for addition
    const handleSelectingNewMembers = async (_id) => {
        // set the member into array on clicking add, only if its not already selected
        // If already selected then again clicking will remove it
        setSelectedMembers((prev) => prev.includes(_id) ? prev.filter((key) => key !== _id) : [...prev, _id]);
    }

    // function to handle confirming while adding new member
    const handleConfirmAddMember = async () => {
        handleClose();
    }

    // JSX to render the component
    return (
        <Dialog
            // open
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    bgcolor: "#1e293b",
                    color: "#f3f4f6",
                    margin: "0",
                    padding: "1rem",
                    width: { xs: "90%", sm: "60%", md: "40%", lg: "30%" },
                    height: "60%"
                }
            }}
        >
            <div className="self-center flex flex-col items-center justify-between px-2 w-full">
                <DialogTitle sx={{ margin: "0", padding: "0rem", fontWeight: "600", fontSize: "1.5rem" }}>Add New Member</DialogTitle>
            </div>

            <div className="border-b self-center border-slate-700 my-4 w-11/12"></div>

            {/* List of Members eligible to be added */}
            <Stack overflow={"auto"} alignItems={"center"} height={"75%"} >
                {availabeMembers.length > 0 ?
                    availabeMembers?.map((member) => (
                        <UserItem key={member._id} user={member} handler={handleSelectingNewMembers} isAdded={selectedMembers.includes(member._id)} />
                    )) :
                    (<Typography className="self-center text-gray-400" >No friends found</Typography>)}
            </Stack>

            <div className="border-b border-slate-700 self-center my-4 w-11/12"></div>

            <div className=" self-center">
                <Button sx={{ color: "#93c5fd" }} onClick={handleClose}>
                    <Typography>Cancel</Typography>
                </Button>
                {availabeMembers && (
                    <Button sx={{ color: "#22c55e" }} disabled={isLoadingAddNewMember} onClick={handleConfirmAddMember}>
                        <Typography>Confirm</Typography>
                    </Button>
                )}
            </div>
        </Dialog>
    );
};

// Exporting the component
export default AddNewGroupMember;
