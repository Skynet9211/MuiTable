import React from 'react';
import {
   Box,
   InputLabel,
   Typography,
   Select,
   MenuItem,
   Grid,
   FormControl,
   Button,
   Divider,
   Paper,
   Table,
   TableHead,
} from '@mui/material';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppTwoTone';
import DataGridDemo from './fakeClinicData';
import FakeChart1 from './fakeChart1';

function Mainpage({ drawerWidth }) {
   const [openModal, setOpenModal] = React.useState(false);
   const [selectValue, setSelectValue] = React.useState(1);
   const [selectbar, setSelectbar] = React.useState('# of Clinics');
   const handleChangeBar = e => {
      setSelectbar(e.target.value);
   };

   const handleChange = e => {
      console.log(e.target.value);
      setSelectValue(e.target.value);
   };
   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      bgcolor: '#ffe',
      borderRadius: '5px',
      boxShadow: 55,
      p: 4,
      padding: 1,
   };

   return (
      <Box
         container
         sx={{
            width: `calc(100vw - ${drawerWidth}px)`,
            position: 'fixed',
            left: drawerWidth,
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 50px)',
         }}
         classname='custom-box'
      >
         <Box sx={{ alignSelf: 'left', marginLeft: '10px' }}>
            <Typography variant='h3' gutterBottom>
               Clinic Profitability
            </Typography>
         </Box>
         <Box
            sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', marginLeft: '10px' }}
         >
            <Paper
               sx={{
                  width: 'fit-content',
                  maxWidth: `calc(100wv - ${drawerWidth}px)`,
                  marginLeft: '10px',
                  alignSelf: 'left',
                  marginBottom: '5px',
               }}
               elevation={12}
            >
               <Box width={780}>
                  <Grid
                     direction={'row'}
                     container
                     alignItems={'center'}
                     justifyContent='space-between'
                     paddingY={1}
                  >
                     <Grid item marginLeft={2}>
                        <Typography
                           variant='body1'
                           sx={{ color: theme => theme.palette.grey[700] }}
                        >
                           November 2022 (T3M)
                        </Typography>
                     </Grid>
                     <Grid item>
                        <FormControl
                           sx={{ width: '120px' }}
                           fullWidth
                           size='small'
                           color='secondary'
                        >
                           <InputLabel>Select</InputLabel>
                           <Select
                              labelId='demo-simple-select-label'
                              id='demo-simple-select'
                              label='Select'
                              value={selectValue}
                              onChange={handleChange}
                              fullWidth
                              variant='outlined'
                              color='secondary'
                           >
                              <MenuItem value={1}>Total</MenuItem>
                              <MenuItem value={2}>Region</MenuItem>
                              <MenuItem value={3}>Months</MenuItem>
                           </Select>
                        </FormControl>
                     </Grid>
                     <Grid item marginRight={2}>
                        <Button variant='outlined' color='secondary'>
                           <GetAppTwoToneIcon />
                           Export
                        </Button>
                     </Grid>
                  </Grid>
               </Box>
               <Box sx={{ overflow: 'auto' }}>
                  <DataGridDemo selectValue={selectValue} />
               </Box>
            </Paper>
            <Box>
               <Paper
                  sx={{
                     width: 1000,
                     height: 420,
                     marginLeft: '10px',
                     paddingTop: '10px',
                  }}
                  elevation={12}
               >
                  <Box sx={{ justifyContent: 'end', display: 'flex' }}>
                     <FormControl size='small' sx={{ marginRight: '10px' }} color='secondary'>
                        <InputLabel>Show</InputLabel>
                        <Select
                           labelId='demo-simple-select-label'
                           id='demo-simple-select'
                           label='Select'
                           value={selectbar}
                           onChange={handleChangeBar}
                           fullWidth
                           variant='outlined'
                           color='secondary'
                        >
                           <MenuItem value={'# of Clinics'}># of Clinics</MenuItem>
                           <MenuItem value={'Region'}>Region</MenuItem>
                        </Select>
                     </FormControl>
                  </Box>
                  <FakeChart1 selectbar={selectbar} />
               </Paper>
            </Box>
         </Box>
      </Box>
   );
}
export default Mainpage;
