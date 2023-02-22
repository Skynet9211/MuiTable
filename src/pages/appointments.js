import React, { useState, useEffect } from 'react';
import Header from '../components/header'


const Appointments = ({ drawerWidth }) => {
   
   return (
      <div
         style={{
            width: `calc(100vw - ${drawerWidth + 10}px)`,
            position: 'relative',
            left: drawerWidth,
            marginLeft: '10px',
         }}
      >
         <Header title={'Appointments'}/>
       
      </div>
   );
};

export default Appointments;
