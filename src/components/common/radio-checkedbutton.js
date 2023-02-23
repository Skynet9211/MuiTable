import React from 'react'
import { Checkbox } from '@mui/material'
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked'

const RadioCheckBox = ({color,sx}) => {
  return (
    <Checkbox color={color} sx={sx} icon={<RadioButtonUnchecked/>} checkedIcon={<RadioButtonChecked/>}/>
  )
}

export default RadioCheckBox