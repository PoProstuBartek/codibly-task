import { TextField } from '@mui/material';
import React from 'react'

const Input = ({ filter, setFilter }) => {

  const handleFilter = (e) => {
    let num = e.target.value
    num <= 0 ? setFilter(0) : setFilter(num);
  }

  return (
    <>
      <TextField 
        type='number' 
        value={filter} 
        onChange={handleFilter} 
        variant="outlined" 
        label="Enter id you're looking for" 
      />
    </>
  )
}

export default Input