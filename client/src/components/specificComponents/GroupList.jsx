// Importing required modules
import React from 'react';

// Importing MUI assets
import { Stack, Typography } from '@mui/material';

// Importing custom components
import GroupListItem from "../sharedComponents/GroupListItem";


// Creating the GroupList component
const GroupList = ({ width="100%", myGroups = [], groupChatId }) => {
    // JSX to render component
    return (
        <Stack width={width} height={"100%"} paddingInline={{ xs: "0", sm: ".5rem", md: "1rem" }} direction={"column"} className="overflow-y-auto" >
            { myGroups.length > 0 ?
                myGroups?.map((group) => {
                    return(
                        <GroupListItem key={group._id} group={group} groupChatId={groupChatId} />
                    )
                }) :
                (
                    <Typography textAlign={"center"} >
                        No Groups exist
                    </Typography>
                )
            }
        </Stack>
    );
};

// Exporting the component
export default GroupList;