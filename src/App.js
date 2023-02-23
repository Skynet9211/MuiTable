import React, { useState } from 'react';
import './App.css';
import Navbar from './nav components/Index';
import Mainpage from './pages/Clinics/Clinic Profitability/clinicProfitability';
import Appointments from './pages/appointments';
import ThemeProvider from './theme';
import { Routes, Route, BrowserRouter,Navigate } from 'react-router-dom';
import HuddleReport from './pages/Clinics/Huddle Report/HuddleReport';
import { ScaleLoader } from 'react-spinners';
import { usePromiseTracker } from 'react-promise-tracker';
function App() {
   const { promiseInProgress } = usePromiseTracker();
   const DEFAULT_WIDTH = 85;
   const EXPANDED_WIDTH = 240;
   const [open, setopen] = useState(false);
   const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
   const [dropDown, setDropDown] = useState(false);
   const [selectedButton, setSelectedButton] = useState(1);
   const [isLoading, setisLoading] = React.useState(false);
   const toggleLoading = () => {
      setisLoading(!isLoading);
   };
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
                  openDrawer={open}
                  toggleDrawer={toggleDrawer}
                  handleChange={handleChange}
                  toggleLoading={toggleLoading}
               />
                     <ScaleLoader
                     loading={promiseInProgress}
                     color={'#0092E1'}
                     height={25}
                     aria-label='Loading Spinner'
                     data-testid='loader'
                     style={{position:'fixed',zIndex:2500,marginLeft:'50%',marginTop:'0.5%'}}
                  />
               <div>
            

                  <Routes>
                       <Route
                        path='*'
                        element={<Navigate to='/Home' replace={true}/>}
                     />
                     <Route
                        path='Home'
                        element={<Mainpage drawerWidth={sidebarWidth} isLoading={isLoading} />}
                     />
                     <Route
                        path='Home/ClinicProfitability'
                        element={<Mainpage drawerWidth={sidebarWidth} isLoading={isLoading} />}
                     />
                     <Route
                        path='Appointments/Cancellations'
                        element={<Appointments drawerWidth={sidebarWidth} isLoading={isLoading} />}
                     />
                     <Route
                        path='Home/HuddleReport'
                        element={<HuddleReport drawerWidth={sidebarWidth} isLoading={isLoading} />}
                     />
                  </Routes>
               </div>
            </ThemeProvider>
         </BrowserRouter>
      </div>
   );
}

export default App;
