import React from 'react';
import { styled } from '@mui/material/styles';
import {
   Tooltip,
   MenuItem,
   IconButton,
   Switch,
   ListItemButton,
   List,
   Typography,
   Button,
} from '@mui/material';
import { drawerDataMain } from '../data/drawerDataMain';
import { grey } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

const NavListShort = () => {
   const [selectedIndex, setSelectedIndex] = React.useState(0);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };
   return (
      <List>
         {drawerDataMain.map((data, i) => (
            <Tooltip
            //leaveDelay={5000000}
            
               componentsProps={{
                  tooltip: {
                     sx: {
                        bgcolor: '#fff',
                        boxShadow: 5,
                        color: grey[900],
                        width:'200px',

                        '& .MuiTooltip-arrow': {
                           color: '#fafafa',
                        },
                     },
                  },
               }}
               arrow
               key={data.id + '_index'}
               title={data.submenu.map((sub, i) => (
                  <MenuItem
                     key={i + 'menu_item'}
                     component={NavLink}
                     to={`${data.path}/${sub.replaceAll(' ','')}`}
                     sx={{'&.active': {
                        color: 'text.primary',
                        bgcolor: 'primary.lighter',
                        fontWeight: 'fontWeightBold',
                        borderRadius:'10px',
                        boxShadow:theme=>theme.shadows[2]
                      },                  
                   '&:hover': {
                      borderRadius: '10px',
                   }, }}
                    
                  >
                     <span style={{ textDecoration: 'none' }}>{sub}</span>
                  </MenuItem>
               ))}
               placement='right'
            >
               <ListItemButton
                  disableRipple
                  disableTouchRipple
                  sx={{
                     paddingRight: '0px',
                     paddingLeft: '0px',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     textDecoration: 'none',
                     margin: '2px',
                     '&.active': {
                        color: 'text.primary',
                        bgcolor: 'primary.lighter',
                        fontWeight: 'fontWeightBold',
                        borderRadius:'15px',
                        boxShadow:theme=>theme.shadows[2]
                      },
                  
       
                
                  
                   '&.MuiListItemButton-root:hover': {
                      borderRadius: '15px',
                   },
                     marginBottom: '2px',
                  }}
                
               >
                  {data.icon}
                  <Typography variant='caption' noWrap>
                     <span style={{ textDecoration: 'none' }}> {data.name}</span>
                  </Typography>
               </ListItemButton>
            </Tooltip>
         ))}
      </List>
   );
};

export default NavListShort;
