import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React from 'react'
function MovieRated({ N }) {
    
  return (
        <Box>
            <Rating name="read-only" value={N} max={7} readOnly />
        </Box>
    )
}

export default MovieRated