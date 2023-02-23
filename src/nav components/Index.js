import React, { useState } from "react";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  Divider,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Badge
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import NavDrawer from "./NavDrawer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WebSettingsModal from "../components/webSettingsModal";
import ClinicFilters from "../components/filters/clinicFilters";
const Navbar = ({ drawerWidth, openDrawer, toggleDrawer, toggleLoading }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openTooltip, setOpenTooltip] = React.useState(false);
  const [openModal,setOpenModal]=useState(false)
  const [notifications,setNotifications]=useState(true)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlenotificationReset =()=>{
    setNotifications(false)
    console.log(notifications);
    setTimeout(()=>{setNotifications(true)},[25000])
  }
  const handleOpenModal=()=>{
   setOpenModal(true)
  }
  const handleCloseModal=()=>{
   setOpenModal(false)
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
     backgroundColor: '#FFC000',
     color: '#FFC000',
     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
     '&::after': {
       position: 'absolute',
       top: 0,
       left: 0,
       width: '100%',
       height: '100%',
       borderRadius: '50%',
       animation: 'ripple 1.2s infinite ease-in-out',
       border: '1px solid currentColor',
       content: '""',
     },
   },
   '@keyframes ripple': {
     '0%': {
       transform: 'scale(.8)',
       opacity: 1,
     },
     '100%': {
       transform: 'scale(2.4)',
       opacity: 0,
     },
   },
 }));
 
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          left: drawerWidth,
          width: `calc(100vw-${drawerWidth})`,
          backgroundColor: "inherit",
          top: 0,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
          disableGutters
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ marginRight: "30px" }}
          >
            <ClinicFilters/>
            <Button
              onClick={(e) => {
                handleClick(e);
                handlenotificationReset()
              }}
              size="small"
              sx={{
                textTransform: "none",
                "&.MuiButton-root.Mui-selected": {
                  bgcolor: (theme) => theme.palette.secondary.dark,
                },
                color: (theme) => theme.palette.text.primary,
                
              }}
            >
                        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
        invisible={notifications?false:true}
      >
        <Avatar />
        </StyledBadge>
              <Typography sx={{ marginLeft: "5px" }}>User Name</Typography>
              <ArrowDropDownIcon />
            </Button>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                width: 220,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar />
              <div>
                <Typography
                  variant="subtitle1"
                  color={(theme) => theme.palette.grey[600]}
                  sx={{ fontWeight: 600, mb: -1 }}
                >
                  User Name
                </Typography>
                <Typography
                  variant="caption"
                  color={(theme) => theme.palette.grey[500]}
                >
                  user@name
                </Typography>
              </div>
            </MenuItem>
            <Divider sx={{ borderStyle: "dashed" }} />
            <MenuItem onClick={()=>{handleClose();handleOpenModal()}}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ color: "secondary.main" }}>
              <ListItemIcon>
                <Logout fontSize="small" sx={{ color: "secondary.main" }} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <NavDrawer
        open={openDrawer}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <WebSettingsModal open={openModal} handleClose={handleCloseModal}/>
    </>
  );
};

export default Navbar;
