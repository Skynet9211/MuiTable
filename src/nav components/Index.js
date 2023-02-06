import React, { useState } from 'react';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import {
   AppBar,
   Toolbar,
   Typography,
   Tooltip,
   Stack,
   Button,
   Avatar,
   Grid,
   Paper,
   Divider,
   Switch,
   FormControlLabel
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import NavDrawer from './NavDrawer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = ({ drawerWidth, open, toggleDrawer,toggleLoading }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [openTooltip, setOpenTooltip] = React.useState(false);
 

   function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
         setAnchorEl(event.currentTarget);
         console.log(event.currentTarget);
      }
   }

   function handleClose() {
      setAnchorEl(null);
   }
   const drawerButton = () => {
      return drawerWidth - 20;
   };
   
   const UserHelpDropDown = () => {
      return (
         <>
            <Stack>
               <Typography
                  variant='subtitle1'
                  color={theme => theme.palette.grey[700]}
                  sx={{ fontWeight: 600 }}
               >
                  User Name
               </Typography>
               <Typography variant='subtitle2' color={theme => theme.palette.grey[700]}>
                  user@name
               </Typography>
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Grid container direction={'column'} justifyContent='center'>
               <Grid item>
                  <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }} fullWidth>
                     <Typography variant='body2' color='common.black'>
                        Home
                     </Typography>
                  </Button>
               </Grid>
               <Grid item>
                  <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }} fullWidth>
                     <Typography variant='body2' color='common.black'>
                        Profile
                     </Typography>
                  </Button>
               </Grid>
               <Grid item>
                  <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }} fullWidth>
                     <Typography variant='body2' color='common.black'>
                        Settings
                     </Typography>
                  </Button>
               </Grid>
            </Grid>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Button sx={{ textTransform: 'none', justifyContent: 'flex-start' }} fullWidth>
               <LogoutTwoToneIcon />
               <Typography variant='body2'>Log Out</Typography>
            </Button>
         </>
      );
   };

   return (
      <>
         <AppBar
            position='sticky'
            // variant='dense'
            sx={{
               left: drawerWidth,
               width: `calc(100vw-${drawerWidth})`,
               backgroundColor: 'inherit',
               top: 0,
            }}
         >
            <Toolbar
               variant='dense'
               sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  backgroundColor: theme => theme.palette.secondary.main,
               }}
               disableGutters
            >
               <Stack direction='row' spacing={2} alignItems='center' sx={{ marginRight: '30px' }}>
                  <FormControlLabel control={<Switch onChange={()=>toggleLoading()} color='error'/>} label='Loading' /> 
                  <Tooltip
                     onClose={() => setOpenTooltip(false)}
                     open={openTooltip}
                     componentsProps={{
                        tooltip: {
                           sx: {
                              bgcolor: '#fafafa',
                              boxShadow: 1,
                              color: theme => theme.palette.text.primary,
                              width: '180px',

                              '& .MuiTooltip-arrow': { color: '#fafafa' },
                           },
                        },
                     }}
                     title={<UserHelpDropDown />}
                     arrow
                     placement='bottom-end'
                  >
                     <Button
                        onClick={() => setOpenTooltip(!openTooltip)}
                        size='small'
                        sx={{
                           textTransform: 'none',
                           '&.MuiButton-root.Mui-selected': {
                              bgcolor: theme => theme.palette.secondary.dark,
                           },
                           color: theme => theme.palette.text.primary,
                        }}
                     >
                        <PersonIcon />

                        <Typography sx={{ marginLeft: '5px' }}>User Name</Typography>
                        <ArrowDropDownIcon />
                     </Button>
                  </Tooltip>
               </Stack>
            </Toolbar>
         </AppBar>
         <NavDrawer open={open} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
      </>
   );
};

export default Navbar;
