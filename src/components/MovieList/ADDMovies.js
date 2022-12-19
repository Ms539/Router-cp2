import React,{ useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
  
 function ADDmovies({MoviesAdded}) {
    
   return MoviesAdded.map((e,i)=><MovieCard {...MoviesAdded[i]}/>)
 }
 export default ADDmovies

