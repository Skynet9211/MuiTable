import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import DataThresholdingTwoToneIcon from '@mui/icons-material/DataThresholdingTwoTone';
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import SonovaIcon from '../sonovaIcon';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import FeaturedVideoTwoToneIcon from '@mui/icons-material/FeaturedVideoTwoTone';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';

export const drawerDataMain = [
   {
      id: 1,
      name: 'Clinics',
      icon: <LocalHospitalTwoToneIcon />,
      path: '/Home',
      submenu: [
         'Clinic Profitability',
         'Huddle Report',
         'Win the Day',
         'RPOR',
         'Funnel Report',
         'KPIs',
         'Clinics',
      ],
   },
   {
      id: 2,
      name: 'Appointments',
      icon: <BookTwoToneIcon />,
      path: 'Appointments',
      submenu: [
         'Cancellations',
         'Online Scheduler',
         'Open Slots',
         'Email Confirmations',
         'Schedule Health',
         'Targets',
         'T&E',
         'Covid Tracker',
         'PH Calls',
         'PH Usage',
      ],
   },
   {
      id: 3,
      name: 'Sales',
      icon: <PointOfSaleTwoToneIcon />,
      path: 'Sales',
      submenu: [
         'Help Rates',
         'Daily Flash',
         'New Orders',
         'TPA Devices',
         'Insurance Plus',
         'Monthly Sales',
         '% to Target Price',
         'Audit',
         'Charts',
         'Data',
      ],
   },
   {
      id: 4,
      name: 'Inventory',
      path: 'Inventory',
      icon: <Inventory2TwoToneIcon />,
      submenu: ['Aging Reports', 'Exception Reports', 'Serial Number'],
   },
   {
      id: 5,
      name: 'Finance',
      path: 'Finance',
      icon: <CalculateTwoToneIcon />,
      submenu: ['P&L Summary', 'AR Report', 'Acquisitions'],
   },
   {
      id: 6,
      name: 'Marketing',
      path: 'Marketing',
      icon: <FeaturedVideoTwoToneIcon />,
      submenu: ['Data Quality', 'Attribution', 'Zoom Reports', 'Google Ranking'],
   },
   {
      id: 7,
      name: 'Scheduling',
      path: 'Scheduling',
      icon: <CalendarMonthTwoToneIcon />,
      submenu: ['Clinics', ' Staff', 'Reports', 'Scheduling Issues'],
   },
   {
      id: 8,
      name: 'Sonova',
      path: 'Sonova',
      icon: <SonovaIcon />,
      submenu: ['Daily Report', 'Capacity'],
   },
   {
      id: 9,
      name: 'Staff',
      path: 'Staff',
      icon: <Person2TwoToneIcon />,
      submenu: ['PTO Report', 'Sycle Staff', 'Contacts', ' UltiPro'],
   },
   {
      id: 10,
      name: 'Maps',
      path: 'Maps',
      icon: <AddLocationAltTwoToneIcon />,
      submenu: ['Clinics'],
   },
   {
      id: 11,
      name: 'Data',
      path: 'Data',
      icon: <DataThresholdingTwoToneIcon />,
      submenu: ['Master Data', ' Cubes', 'Patients'],
   },
];
