import React from 'react'
import { useNavigate } from 'react-router-dom';

import MovieRated from './rate';
function MovieCard(props) {
    var { movieTitle, Img, Rate, url, Description } = props
    const Navigation=useNavigate()
    
  

    return (
        <div class="card-container">
            <div class="card-container1">
                <img class="movieImage" src={Img} url=" Picture Not avaible"></img>
                <div class='trailer' style={{overflow:"auto"}}>
                <p style={{textOverflow:"scroll"}}>{Description}</p>
            </div>
            </div>
            <div class="card-container2">
                <p class="movieTitle" >{movieTitle}</p>
            </div>
            <div class="card-container3">
                <MovieRated N={Rate} />
                <button onClick={() => Navigation(`trailer/${movieTitle.replace(/\s+/g, '')}`,{state:{url,Description}})}
                    value='click here' class="Watch">Watch</button>
            </div>
            
        </div>
        )
}
export default MovieCard
