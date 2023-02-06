import React, { useState } from 'react';
import './App.css';
import Navbar from './nav components/Index';
import Mainpage from './pages/Clinics/Clinic Profitability/clinicProfitability';
import Appointments from './pages/appointments';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import HuddleReport from './pages/Clinics/Huddle Report/HuddleReport';

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

   const sidebarWidthChange = () => {
      open && true ? setSidebarWidth(DEFAULT_WIDTH) : setSidebarWidth(EXPANDED_WIDTH);
   };

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
                     <Route path='/Home' element={<Mainpage drawerWidth={sidebarWidth} />} />
                     <Route
                        path='Home/Clinic Profitability'
                        element={<Mainpage drawerWidth={sidebarWidth} />}
                     />
                     <Route
                        path='Appointments/Cancellations'
                        element={<Appointments drawerWidth={sidebarWidth} />}
                     />
                     <Route
                        path='Home/Huddle Report'
                        element={<HuddleReport drawerWidth={sidebarWidth} />}
                     />
                  </Routes>
               </div>
            </ThemeProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;
