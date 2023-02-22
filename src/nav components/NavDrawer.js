import React from 'react';
import NavListShort from './NavListShort';
import ListNav from './NavList';
import { Drawer, IconButton, Tooltip, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const NavDrawer = ({ open, drawerWidth, toggleDrawer }) => {
   return (
      <Drawer
         variant='permanent'
         PaperProps={{
            sx: {
               width: drawerWidth,
               borderRight: '1px dashed rgba(145, 158, 171, 0.24)',
               backgroundColor: theme => theme.palette.background.default,
            },
         }}
         anchor='left'
         open={open}
         onClose={() => toggleDrawer()}
      >
         {!open && (
            <div>
               <div style={{ paddingLeft: '0' }}>
                  <img
                     height={32}
                     alt='ABI'
                     src='https://static.alpaca360.com/images/abi-logo.svg'
                     style={{
                        marginLeft: '10px',
                        marginTop: '10px',
                        background: '#26c3df',
                        borderRadius: '10px',
                     }}
                  />
                  <Tooltip title='Expand Sidebar' placement='right' arrow>
                     <IconButton
                        variant='contained'
                        sx={{
                           marginLeft: '68px',
                           border: '1px dashed rgba(145, 158, 171, 0.24)',
                           zIndex: '1250',
                           position: 'fixed',
                           marginTop: '-30px',
                           backgroundColor: theme => theme.palette.background.default,
                           '&.MuiButtonBase-root:hover': {
                              bgcolor: '#fff',
                           },
                        }}
                        onClick={() => toggleDrawer()}
                        size='small'
                        color='primary'
                     >
                        <KeyboardDoubleArrowRightIcon fontSize='small' />
                     </IconButton>
                  </Tooltip>
               </div>
               <NavListShort />
            </div>
         )}
         {open && (
            <div classname='custom-scrollbars'>
               <div style={{ paddingLeft: '0' }}>
                  <div
                     style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '80%',
                     }}
                  >
                     <img
                        height={32}
                        alt='ABI'
                        src='https://static.alpaca360.com/images/abi-logo.svg'
                        style={{
                           marginLeft: '10px',
                           marginTop: '-14px',
                           background: '#26c3df',
                           borderRadius: '10px',
                        }}
                     />
                     <Typography
                        paragraph
                        align='center'
                        color='primary'
                      sx={{ marginTop: '2px' }}
                     >
                        Alpaca Business Intelligence
                     </Typography>
                  </div>

                  <Tooltip title='Collapse Sidebar' placement='right' arrow>
                     <IconButton
                        variant='contained'
                        sx={{
                           marginLeft: '222px',
                           marginTop: '-54px',
                           border: '1px dashed rgba(145, 158, 171, 0.24)',
                           zIndex: '1250',
                           position: 'fixed',

                           backgroundColor: theme => theme.palette.background.default,
                           '&.MuiButtonBase-root:hover': {
                              bgcolor: '#fff',
                           },
                        }}
                        onClick={() => toggleDrawer()}
                        size='small'
                        color='primary'
                     >
                        <KeyboardDoubleArrowLeftIcon fontSize='small' />
                     </IconButton>
                  </Tooltip>
               </div>

               <ListNav />
            </div>
         )}
      </Drawer>
   );
};

export default NavDrawer;
