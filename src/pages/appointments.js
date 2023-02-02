import React, { useState, useEffect } from 'react';

const Appointments = ({ drawerWidth }) => {
   const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
   const [openModal, setOpenModal] = React.useState(false);

   function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
         width,
         height,
      };
   }
   React.useEffect(() => {
      function handleResize() {
         setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);
   return (
      <div
         style={{
            width: windowDimensions.width - (drawerWidth + 10),
            position: 'relative',
            left: drawerWidth,
            marginLeft: '10px',
         }}
      >
         ABC Appointments
      </div>
   );
};

export default Appointments;
