import * as React from 'react';

// Material ui
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';


const SearchBy = (
  {
    searchFilterValue,
    setSearchFilterValue }
) => {
  const handleChange = (event) => {
    setSearchFilterValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="select-helper-label">Search By</InputLabel>
        <Select
          labelId="select-helper-label"
          id="select-helper-label"
          value={searchFilterValue}
          label="Search By"
          onChange={handleChange}
        >
          <MenuItem value={'event_date'}>Date</MenuItem>
          <MenuItem value={'client'}>Client</MenuItem>
          <MenuItem value={'invoice_number'}>Invoice Number</MenuItem>
          <MenuItem value={'description'}>Description</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

SearchBy.propTypes = {
  searchFilterValue: PropTypes.string,
  setSearchFilterValue: PropTypes.func
};

export default SearchBy;
