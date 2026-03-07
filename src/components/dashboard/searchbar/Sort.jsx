import * as React from 'react';

// Material ui
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Ascending', 'Descending'];


const Sort = ({ sort, setSort }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSort(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="sort-patient-list">Sort List</InputLabel>
        <Select
          labelId="sort-patient-list"
          id="sort-patient-select"
          value={sort}
          onChange={handleChange}
          input={<OutlinedInput label="Sort List" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

Sort.propTypes = {
  sort: PropTypes.string,
  setSort: PropTypes.func
};

export default Sort;
