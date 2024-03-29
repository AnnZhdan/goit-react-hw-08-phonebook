import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSet } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selector';
import { Avatar, TextField, Box } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { avatarStyle } from '../../pages/StylePages';
import { boxFilterStyle } from './StyleFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterPhoneBook = useSelector(selectFilter);

  const onChangeFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterSet(value));
  };

  return (
    <Box component="div" sx={boxFilterStyle}>
      <Avatar sx={avatarStyle}>
        <PersonSearchIcon />
      </Avatar>
      <TextField
        margin="normal"
        inputProps={{
          inputMode: 'text',
          pattern: '^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$',
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
