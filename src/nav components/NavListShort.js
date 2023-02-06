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
import { Link } from 'react-router-dom';

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
                     component={Link}
                     to={`${data.path}/${sub}`}
                     sx={{ textDecoration: 'none' }}
                     onClick={event => handleListItemClick(event, data.id - 1)}
                  >
                     <span style={{ textDecoration: 'none' }}>{sub}</span>
                  </MenuItem>
               ))}
               placement='right'
            >
               <ListItemButton
                  component={Link}
                  to={`${data.path}/${data.submenu[0]}`}
                  sx={{
                     paddingRight: '0px',
                     paddingLeft: '0px',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     textDecoration: 'none',
                     margin: '2px',
                     '&.MuiListItemButton-root.Mui-selected': {
                        borderRadius: '10px',
                        boxShadow: 1,
                        bgcolor: '#primary.lighter',
                        margin: '0px 5px',
                        '&.hover': {
                           borderRadius: '10px',
                        },
                     },
                     '&.MuiListItemButton-root:hover': {
                        borderRadius: '10px',
                     },
                     marginBottom: '2px',
                  }}
                  onClick={event => handleListItemClick(event, i)}
                  selected={selectedIndex === i}
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
