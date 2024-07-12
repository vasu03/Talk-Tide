// Importing required modules
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

// Importing react icons
import { BiCheck, BiEditAlt, BiHome, BiMenuAltLeft, BiPlus, BiTrash } from "react-icons/bi";

// Importing MUI assets
import { Button, Dialog, Drawer, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";

// Importing custom components
import GroupList from "../components/specificComponents/GroupList";
import { sampeUserData, sampleChatData } from "../components/sharedComponents/sampleData";
import UserItem from "../components/sharedComponents/UserItem";

const ConfirmDeleteDialog = lazy(() => import("../components/dialogComponents/ConfirmDeleteDialog"));
const AddNewGroupMember = lazy(() => import("../components/dialogComponents/AddNewGroupMember"));



// Creating the Groups Page
const Groups = () => {
	// grab the current groupChatId from URL
	const groupChatId = useSearchParams()[0].get("group");

	// Some states to handle display of group list 
	const [isGroupListOpen, setIsGroupListOpen] = useState(false);
	const [groups, setGroups] = useState(sampleChatData);

	// Some states to handle managing the group details
	const [isEditable, setIsEditable] = useState(false);
	const [groupName, setGroupName] = useState("");
	const [groupMembers, setGroupMembers] = useState(sampeUserData);
	const [updatedGroupName, setUpdatedGroupName] = useState("");
	const [isDeleteDialog, setIsDeleteDialog] = useState(false);

	// Some variables to manage the group details
	const isAddNewMember = false;


	// function to handle the open of group list
	const handleGroupListDisplay = () => {
		// toggling the state
		setIsGroupListOpen((prev) => !prev);
	}
	// function to handle closing of group list
	const handleGroupListClose = () => {
		setIsGroupListOpen(false);
	}

	// function to handle the updating of group name
	const handleUpdateGroupName = async () => {
		setIsEditable(false);
	}

	// function to remover the member from group
	const handleRemoveMember = (_id) => {

	}

	// funcitons to handle the opeining/closing of group deletion dialog
	const handleOpenDeleteDialog = async () => {
		setIsDeleteDialog(true);
	}
	const handleCloseDeleteDialog = async () => {
		setIsDeleteDialog(false);
	}

	// functiont to handle the addition of new member into group
	const handleOpenAddGroupMember = async () => {

	}


	// An effect to fetch the Group details
	useEffect(() => {
		if (groupChatId) {
			setGroupName(`Group-Name ${groupChatId}`);
			setUpdatedGroupName(`Group-Name ${groupChatId}`);
		}

		// cleanup func before a effect is again triggered
		return () => {
			setGroupName("");
			setUpdatedGroupName("");
			setIsEditable(false);
		};
	}, [groupChatId]);


	// JSX component element for storing/rendering the Group name
	const GroupName = (
		<Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={".5rem"} >
			{isEditable ?
				(
					<>
						<input value={updatedGroupName} onChange={(e) => setUpdatedGroupName(e.target.value)} placeholder="Group Name" className="py-2 px-3 border border-gray-600 bg-transparent rounded-md outline-none" />
						<Tooltip title="Save">
							<IconButton onClick={handleUpdateGroupName} type="submit" >
								<BiCheck className="text-green-500 text-4xl border p-1 rounded-md bg-slate-700 border-slate-700 hover:bg-slate-600" />
							</IconButton>
						</Tooltip>
					</>) :
				(
					<>
						<Typography variant="h5" className="text-gray-200">
							{groupName}
						</Typography>
						<Tooltip title="Edit">
							<IconButton onClick={(e) => setIsEditable(true)} type="submit">
								<BiEditAlt className="text-cyan-300 text-3xl border p-1 rounded-md bg-slate-700 border-slate-700 hover:bg-slate-600" />
							</IconButton>
						</Tooltip>
					</>
				)
			}
		</Stack>
	);

	// JSX component element for showing a group of buttons
	const ButtonGroup = (
		<Stack
			direction={{ sm: "row", xs: "column-reverse" }}
			spacing={".5rem"}
			padding={{ xs: ".5rem", sm: "1rem", md: "1rem 4rem" }}
		>
			<Button
				sx={{
					gap: ".5rem",
					color: "#f87171",
					padding: ".5rem 1rem",
					bgcolor: "rgba(55, 65, 81, 0.3)",
					"&:hover": {
						bgcolor: "rgba(55, 65, 81, 0.6)"
					}
				}}
				onClick={handleOpenDeleteDialog}
				size="small"
			>
				<BiTrash className="text-xl" />
				Delete Group
			</Button>
			<Button
				sx={{
					color: "#22c55e",
					padding: ".5rem 1rem",
					borderColor: "",
					bgcolor: "rgba(55, 65, 81, 0.5)",
					"&:hover": {
						bgcolor: "rgba(55, 65, 81, 0.8)"
					}

				}}
				size="small"
				onClick={handleOpenAddGroupMember}
			>
				<BiPlus className="text-xl" />
				Add Member
			</Button>
		</Stack>
	);


	// JSX to render the Groups Page
	return (
		<Grid container height={"100vh"} >
			{/* The Grid containing a list of all Groups */}
			<Grid
				item
				sm={4}
				sx={{
					display: { xs: "none", sm: "block" },
					padding: ".5rem",
				}}
				height={"100%"}
				className="bg-gray-900 text-gray-300 border-r border-gray-600"
			>
				<GroupList width="100%" myGroups={sampleChatData} groupChatId={groupChatId} />
			</Grid>

			{/* Grid having main content to manage a group */}
			<Grid
				item
				xs={12}
				sm={8}
				height={"100%"}
				flexDirection={"column"}
				className="flex flex-col border gap-3 items-center justify-start sm:p-3 bg-slate-800 text-gray-300"
			>
				{/* Container for Navigation buttons */}
				<div className="h-[8%] px-3 py-2 w-full flex items-center justify-between">
					{/* Menu btn to open/close the list of groups on small screen */}
					<Tooltip title="Groups" >
						<IconButton sx={{
							display: { xs: "block", sm: "none" }
						}}
							onClick={handleGroupListDisplay}
						>
							<BiMenuAltLeft className="text-gray-100 text-4xl p-1 rounded-full bg-slate-700 border-slate-700 hover:bg-slate-600" />
						</IconButton>
					</Tooltip>

					{/* Link back to home */}
					<Link to={"/"} >
						<Tooltip title="Home" >
							<IconButton >
								<BiHome className="text-gray-100 text-4xl p-1 rounded-full bg-slate-700 border-slate-700 hover:bg-slate-600" />
							</IconButton>
						</Tooltip>
					</Link>
				</div>

				{/* Container for Managing group details (only when a group is selected) */}
				{groupName ? (<>
					<div className=" flex flex-col items-center justify-start w-full h-[90%]">
						{/* Group name */}
						{groupName && <>{GroupName}</>}

						<div className="divider mt-2 mb-2 h-1 xl:w-3/5 lg:w-2/3 md:w-3/4 w-11/12 self-center"></div>

						{/* List of all members */}
						<div className="flex flex-col items-center justify-center h-[70%] sm:h-[75%] xl:w-3/5 lg:w-2/3 md:w-3/4 w-11/12 sm:p-3 gap-2">
							<Typography variant="h5" className="self-start" >Members</Typography>
							<Stack direction={"column"} height={"100%"} width={"100%"} className="items-center overflow-y-auto overflow-x-hidden">
								{groupMembers?.map((member) => (
									<UserItem key={member._id} user={member} handler={handleRemoveMember} isAdded />
								))}
							</Stack>
						</div>

						{/* Group of some buttons */}
						{ButtonGroup}
					</div>
				</>) :
					(<Typography className="self-center">Select a group to view & edit the details.</Typography>)}
			</Grid>


			{/* The Group List Drawer for small screen */}
			<Drawer
				open={isGroupListOpen}
				onClickCapture={handleGroupListClose}
				onClose={handleGroupListClose}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						backgroundColor: "#111827",
						color: "white",
					}
				}}
			>
				<GroupList width={"75vw"} myGroups={groups} groupChatId={groupChatId} />
			</Drawer>


			{/* The Dialog for adding new members to group */}
			{isAddNewMember && (
				<Suspense fallback={<div className="loading loading-spinner"></div>} >
					<AddNewGroupMember handleOpen={true} />
				</Suspense>
			)}



			{/* The Dialog to ask for confirmation to Delete Group */}
			{isDeleteDialog && (
				<Suspense fallback={<div className="loading loading-spinner"></div>} >
					<ConfirmDeleteDialog
						message={"Are you sure, you want to delete this group ?"}
						handleOpen={handleOpenDeleteDialog}
						handleClose={handleCloseDeleteDialog}
					/>
				</Suspense>
			)}
		</Grid>
	);
};

// Exporting the Page
export default Groups;
