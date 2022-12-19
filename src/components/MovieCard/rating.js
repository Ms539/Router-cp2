
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react'
function  MovieRating({N,StarsResearch}) {
    const [value, setValue] = useState(N);
    return (

        <Box>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue); {StarsResearch(newValue)}
                }}
               max={7}
              
            />
        </Box>

    )
}
export default MovieRating



