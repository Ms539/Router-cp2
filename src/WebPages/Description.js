import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Description() {
    const Navigate=useNavigate()
    const { state} = useLocation();
    console.log(state)
  return (
    <div class="MovieTrailerPage">
        <p class="Title">{state.Description}</p>
      <iframe width="560" height="315" src={state.url.replace(/\"/g,'').replace(/\'/g,'')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" ></iframe>
      <button class="btn2" onClick={()=>Navigate("/")}>Back</button>
    </div>
  )
}

export default Description