import React from 'react'
import { Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const Pagination = ({ page, setPage, totalPages }) => {

  const handlePrevious = () => {
    page <= 1 ? setPage(1) : setPage(page - 1);
  }

  const handleNext = () => { 
    page >= totalPages ? setPage(totalPages) : setPage(page + 1);
  }

  return (
    <div className='paginatePages'>
      <Button variant='contained' onClick={handlePrevious}><NavigateBeforeIcon /></Button>
      <Typography variant='h4'>Page: {page}</Typography>
      <Button variant='contained' onClick={handleNext}><NavigateNextIcon /></Button>
    </div>
  )
}

export default Pagination