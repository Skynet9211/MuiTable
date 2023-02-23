import React from "react";
import {
  Modal,
  Backdrop,
  Box,
  Fade,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Button
} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 575,
  bgcolor: "background.paper",
  border: "1px solid #f1f1f1",
  boxShadow: 24,
  p: 4,
};

const WebSettingsModal = ({ open, handleClose }) => {
  return (
    <Modal
 disableEscapeKeyDown
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-around",
              width: "100%",
              
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2" width={"40%"}>
              Roles
            </Typography>
            <Typography id="transition-modal-title" variant="h6" component="h2" width={"40%"}>
              Preview Access
            </Typography>
          </div>
          <Divider />
          <div
            id="transition-modal-description"
            style={{ display: "flex", justifyContent: "space-around",width:'100%'}}
          >
            <div  style={{width:'40%'}}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Appointments"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Inventory"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Manager"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Marketing"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Regional VP"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sales"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sonova"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Staff"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="WS Rep"
                />
              </FormGroup>
            </div>
            <div  style={{width:'40%',display:'flex',flexDirection:'column'}}>
         <FormGroup>
            <FormControlLabel
                  control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon/>} />}
                  label="None"
                />
               <FormControlLabel
                  control={<Checkbox defaultChecked icon={<RadioButtonUncheckedIcon/>} checkedIcon={<RadioButtonCheckedIcon/>}/>}
                  label="Beta"
                />
                </FormGroup>
            </div>
          </div>

          <Divider />
          <div style={{display:'flex',justifyContent:'end',marginTop:'10px',marginBottom:'-10px'}}>
            <Button variant='contained' sx={{mr:'5px'}} onClick={handleClose}>
                Save
            </Button><span style={{marginTop:'6px'}}>|</span>
            <Button color='warning' variant='contained'  sx={{ml:'5px'}} onClick={handleClose}>
                Close
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default WebSettingsModal;
