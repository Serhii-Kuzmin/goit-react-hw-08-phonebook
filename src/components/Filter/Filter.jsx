import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet, selectFilter } from '../../redux/filterSlice';
import { TextField, Box } from '@mui/material';
import { boxFilterStyle } from './StyleFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <Box component="div" sx={boxFilterStyle}>
      <TextField
        margin="normal"
        inputProps={{
          inputMode: 'text',
        }}
        sx={{
          width: 324,
          bgcolor: 'rgba(208, 224, 241, 0.822)',
        }}
        label="Find contacts by name:"
        type="text"
        name="filter"
        value={filterPhoneBook}
        title="Enter the name"
        onChange={onChangeFilter}
      />
    </Box>
  );
};
