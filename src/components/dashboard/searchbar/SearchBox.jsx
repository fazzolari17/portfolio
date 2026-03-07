import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const SearchBox = ({
  searchValue,
  setSearchValue
}) => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        label='Search'
        variant='outlined'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
      />
    </Box>
  );
};

SearchBox.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func
};

export default SearchBox;