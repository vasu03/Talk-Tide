// Importing required modules
import React from "react";

// Importing MUI assets
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { BiX } from "react-icons/bi";


// Creating the Confirmation dialog
const ConfirmDeleteGroup = ({ handleOpen, handleClose, handleDeletion, message }) => {
    // JSX to render the component
    return (
        <Dialog
            open={handleOpen}
            onClose={handleClose}
            sx={{
                "& .MuiDialog-paper": {
                    bgcolor: "#1e293b",
                    color: "#f3f4f6",
                    position: "relative",
                    margin: "0",
                    padding: "1rem",
                    width: { xs: "90%", sm: "60%", md: "40%", lg: "30%"  }
                    
                }
            }}
        >
            <div className="flex items-center justify-between px-2 w-auto">
                <DialogTitle sx={{ margin: "0", padding: "0rem", fontWeight: "600", fontSize: "1.5rem" }}>Confirm Deleting</DialogTitle>
            </div>
            <Typography color="#f3f4f6" className="flex flex-wrap py-4 px-2 text-wrap">
                {message}
            </Typography>
            <div className="self-center sm:self-end">
                <Button sx={{ color: "#93c5fd" }} onClick={handleClose}>
                    <Typography>Cancel</Typography>
                </Button>
                <Button sx={{ color: "#f87171" }} onClick={handleDeletion}>
                    <Typography>Yes, delete</Typography>
                </Button>
            </div>
        </Dialog>
    );
};

// Exporting the component
export default ConfirmDeleteGroup;