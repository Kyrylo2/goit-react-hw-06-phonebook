import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';

// export default function Filter({ filterDataToState }) {
export default function Filter({ filterDataToState }) {
  const dispatch = useDispatch();
  const setFilterData = e => {
    let value = e.currentTarget.value.toLowerCase();

    dispatch(setFilterValue(value));
    // filterDataToState(value);
  };

  return (
    <FormControl
      sx={{
        minWidth: '350px',
        maxWidth: '500px',
        gap: '10px',
        margin: '0 auto',
      }}
    >
      <TextField
        // size="small"
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        type="search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={setFilterData}
      />
    </FormControl>
  );
}

Filter.propTypes = {
  filterDataToState: PropTypes.func.isRequired,
};
