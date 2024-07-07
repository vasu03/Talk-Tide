// Importing required modules
import { Menu } from '@mui/material';
import React from 'react';


// Creating AttachFileMenu component
const AttachFileMenu = ({ anchorOn }) => {
    // JSX to render the component
    return (
        <Menu anchorEl={anchorOn} open={false}>
            <div className="w-20 h-20 bg-slate-700">
                Files
            </div>
        </Menu>
    );
};

// Exporting the component
export default AttachFileMenu;