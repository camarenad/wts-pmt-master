import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const DropdownComponent = props => {
  const locations = [
    { value: '', label: 'None' },
    {
      value: 'S007',
      label: 'S007'
    },
    {
      value: 'LA02',
      label: 'LA02'
    },
    {
      value: 'LA03',
      label: 'LA03'
    },
    {
      value: 'LA04',
      label: 'LA04'
    },
    {
      value: 'LA06',
      label: 'LA06'
    }
  ];
  return (
    <TextField
      id='area-select'
      select
      fullWidth
      label='Bid Area'
      name='bidArea'
      value={props.bidArea}
      autoComplete='off'
      InputLabelProps={{
        shrink: true
      }}
      onChange={props.handleChange}
      displayEmpty={true}
      SelectProps={{
        MenuProps: {
          width: 200
        }
      }}

      helperText='Please select a bid area'
    >
      {locations.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownComponent;
