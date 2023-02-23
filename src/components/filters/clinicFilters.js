import React from "react";
import RadioCheckBox from "../common/radio-checkedbutton";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
const currencies = [
  {
    value: "Jan",
    label: "January",
  },
  {
    value: "Feb",
    label: "February",
  },
  {
    value: "Mar",
    label: "March",
  },
  {
    value: "Apr",
    label: "April",
  },
  {
    value: "Apr",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "Jun",
    label: "June",
  },
  {
    value: "Jul",
    label: "July",
  },
  {
    value: "Aug",
    label: "August",
  },
  {
    value: "Sep",
    label: "September",
  },
  {
    value: "Oct",
    label: "October",
  },
  {
    value: "Nov",
    label: "Nonvember",
  },
  {
    value: "Dec",
    label: "December",
  },
];

const ClinicFilters = () => {
  const [month, setMonth] = React.useState(1);
  const handleChange = (val) => {
    setMonth(val);
  };
  return (
    <>
      <div
        style={{
          border: "1px solid #fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginRight: "5px", paddingLeft: "10px" }}>
          Time Period:
        </div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="T3M"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="T3M"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  size="small"
                />
              }
              label="T3M"
            />
            <FormControlLabel
              value="Monthly"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  size="small"
                />
              }
              label="Monthly"
            />
          </RadioGroup>
        </FormControl>
        <div>
        <TextField  variant="standard" id="outlined-select-currency" select defaultValue="Jan" size="small" sx={{color:'#fff','&.MuiFilledInput-root':{
            color:"#fff"
        }}}>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></div>
      </div>
      <div
        style={{
          border: "1px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginRight: "5px", paddingLeft: "10px" }}>Data:</div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Region"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel
              value="Region"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  size="small"
                />
              }
              label="Region"
            />
            <FormControlLabel
              value="Corporate"
              control={
                <Radio
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  size="small"
                />
              }
              label="Corporate"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default ClinicFilters;
