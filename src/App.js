import React, { useState } from 'react';
import './App.css';
import Navbar from './nav components/Index';
import Mainpage from './pages/Clinics/Clinic Profitability/clinicProfitability';
import Appointments from './pages/appointments';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import HuddleReport from './pages/Clinics/HuddleReport';

function App() {
   const DEFAULT_WIDTH = 85;
   const EXPANDED_WIDTH = 240;
   const [open, setopen] = useState(false);
   const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
   const [dropDown, setDropDown] = useState(false);
   const [selectedButton, setSelectedButton] = useState(1);
   const handleChange = () => {
      setDropDown(!dropDown);
      if (sidebarWidth !== 0) {
         setSidebarWidth(0);
      } else {
         setSidebarWidth(DEFAULT_WIDTH);
      }
   };

   const toggleDrawer = () => {
      sidebarWidthChange();
      setopen(!open);
   };
   // const Drawer = styled(Drawer, { shouldForwardProp: prop => prop !== 'open' })(
   //    ({ theme, open }) => ({
   //       '& .MuiDrawer-paper': {
   //          position: 'relative',
   //          whiteSpace: 'nowrap',
   //          width: drawerWidth,
   //          transition: theme.transitions.create('width', {
   //             easing: theme.transitions.easing.sharp,
   //             duration: theme.transitions.duration.enteringScreen,
   //          }),
   //          boxSizing: 'border-box',
   //          ...(!open && {
   //             overflowX: 'hidden',
   //             transition: theme.transitions.create('width', {
   //                easing: theme.transitions.easing.sharp,
   //                duration: theme.transitions.duration.leavingScreen,
   //             }),
   //             width: theme.spacing(7),
   //             [theme.breakpoints.up('sm')]: {
   //                width: theme.spacing(9),
   //             },
   //          }),
   //       },
   //    })
   // );
   const sidebarWidthChange = () => {
      open && true ? setSidebarWidth(DEFAULT_WIDTH) : setSidebarWidth(EXPANDED_WIDTH);
   };
   // const mdTheme = createTheme({
   //    palette: {
   //       primary: { main: 'rgb(0, 171, 85)' },
   //       secondary: { main: blueGrey[500] },
   //       textHeading: { main: 'rgb(0 0 0 / 61%)' },
   //    },

   //    components: {
   //       Button: {
   //          textTransform: 'none',
   //       },
   //    },
   // });
   return (
      <div className='App'>
         <BrowserRouter>
            <ThemeProvider>
               <Navbar
                  drawerWidth={sidebarWidth}
                  open={open}
                  toggleDrawer={toggleDrawer}
                  handleChange={handleChange}
               />
               <div>
                  <Routes>
                     <Route path='/' element={<Mainpage drawerWidth={sidebarWidth} />} />
                     <Route
                        path='/Clinic Profitability'
                        element={<Mainpage drawerWidth={sidebarWidth} />}
                     />
                     <Route
                        path='Appointments'
                        element={<Appointments drawerWidth={sidebarWidth} />}
                     />
                     <Route
                        path='/Huddle Report'
                        element={<HuddleReport drawerWidth={sidebarWidth} />}
                     />
                  </Routes>
               </div>
               {/* <Dashboard /> */}
            </ThemeProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;
