import {
   List,
   ListItem,
   ListItemText,
   Typography,
   Button,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   ListItemIcon,
   ListItemButton,

} from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { drawerDataMain } from '../data/drawerDataMain';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

import { Link } from 'react-router-dom';
const ListNav = () => {
   const [selectedIndex, setSelectedIndex] = React.useState(0);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };

   return (
      <List sx={{ backgroundColor: 'inherit' }}>
         {drawerDataMain.map((data, index) => (
            <React.Fragment key={data.id}>
               <Accordion
                  sx={{
                     width: '98%',
                     '&.MuiAccordion-root:before': {
                        background: 'inherit',
                     },
                     '&.MuiAccordion-root': { backgroundColor: 'inherit' },
                  }}
                  disableGutters
                  elevation={0}
               >
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls='panel1a-content'
                     id='panel1a-header'
                  >
                     <ListItem>
                        <div style={{ paddingRight: '10px' }}>{data.icon}</div>

                        <Typography>{data.name}</Typography>
                     </ListItem>
                  </AccordionSummary>

                  <AccordionDetails>
                     <List>
                        {data.submenu.map((sub, i) => (
                           <ListItemButton
                              component={NavLink}
                              activeStyle={{  fontWeight: "bold",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",}}
                              to={`${data.path}/${sub}`}
                              sx={{
                                 '&.MuiListItemButton-root.Mui-selected': {
                                    borderRadius: '10px',
                                    boxShadow: 1,
                                    bgcolor: 'grey.light',
                                    color: 'grey',

                                    '&.hover': {
                                       borderRadius: '10px',
                                    },
                                 },
                                 '&.MuiListItemButton-root:hover': {
                                    borderRadius: '10px',
                                 },
                                 marginBottom: '2px',
                              }}
                              // component='a'
                              // href={data.path}
                              // selected={selectedIndex === i}
                              // onClick={event => handleListItemClick(event, i)}
                           >
                              <ListItemIcon>
                                 <FiberManualRecordOutlinedIcon sx={{ fontSize: '10px' }} />
                              </ListItemIcon>
                              <Typography
                                 sx={{ marginLeft: '-30px' }}
                                 variant='subtitle2'
                                 color='secondary'
                              >
                                 {sub}
                              </Typography>
                           </ListItemButton>
                        ))}
                     </List>
                  </AccordionDetails>
               </Accordion>
            </React.Fragment>
         ))}
      </List>
   );
};
export default ListNav;
