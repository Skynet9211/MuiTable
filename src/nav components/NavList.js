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
                              
                              sx={{ mb:'2px',color:'primary.main',
                                
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
                               
                              }}
                        
                           >
                              <ListItemIcon>
                                 <FiberManualRecordOutlinedIcon sx={{ fontSize: '10px',color:'inherit' }} />
                              </ListItemIcon>
                              <Typography
                                 sx={{ marginLeft: '-30px',color:'inherit'}}
                                 variant='subtitle2'
                                 
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
