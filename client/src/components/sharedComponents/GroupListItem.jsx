// Importing required modules
import React, { memo } from 'react';

// Importing MUI assets
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


// Creating the GroupListItem component
const GroupListItem = ({ group, groupChatId }) => {
    // Destructuring the incoming Group data
    const { name, avatar, _id } = group;


    // JSX to render component
    return (
        <Link
            to={`?group=${_id}`}
            onClick={ (e) => {
                // avoid selection if already open
                if (groupChatId === _id) {
                    e.preventDefault();
                }
            } }
            className="text-inherit p-1 border-b border-slate-600"
        >
            <div className="p-2 mt-1 mb-1 relative flex items-center justify-start hover:bg-slate-700 rounded-lg" >
                <Stack direction={"row"} alignItems={"center"} gap={"1rem"}>
                    {/* Group profile pic */}
                    <div className="avatar">
                        <div className="w-12 rounded-full bg-slate-600">
                            <img src="https://avatar.iran.liara.run/public" alt="DP" />
                        </div>
                    </div>
                    {/* Group Name */}
                    <h3>{name}</h3>
                </Stack>
            </div>
        </Link>
    );
};

// Exporting the component
export default memo(GroupListItem);