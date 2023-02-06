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
               componentsProps={{
                  tooltip: {
                     sx: {
                        bgcolor: '#fff',
                        boxShadow: 5,
                        color: grey[900],

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
                     to={`${data.path}/${sub}`}
                     sx={{ textDecoration: 'none',   '&.active': {
                        color: 'text.primary',
                        bgcolor: 'primary.lighter',
                        fontWeight: 'fontWeightBold',
                        borderRadius:'15px',
                        boxShadow:theme=>theme.shadows[2]
                      },
                  
       
                
                  
                   '&.MuiListItemButton-root:hover': {
                      borderRadius: '15px',
                   }, }}
                    
                  >
                     <span style={{ textDecoration: 'none' }}>{sub}</span>
                  </MenuItem>
               ))}
               placement='right'
            >
               <ListItemButton
                  component={NavLink}
                  to={`${data.path}/${data.submenu[0]}`}
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
