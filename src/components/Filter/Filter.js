import './movie.css'
import React,{useState} from 'react'
import  MovieRating from '../MovieCard/rating'
import { NavLink as Link } from 'react-router-dom';

function FilterBar({ Section1,section1, Section2,section2, Section3,section3, Section4,section4, Section5,section5, Research,StarsResearchFilter }) {
    const a = { color: 'white' }
    
    return (
        <div className='header'>
            <nav class='navCss'  style={{ display: 'grid', gridTemplateColumns: '30% 30% 30%' }}>
                <ul class='ulCss' style={{ display: 'grid', gridTemplateColumns: '17% 25% 20% 20% 20%' }}>
                    
                    <a onClick={(e)=>Section2(e.target.innerText)} styleActive={{ color: 'red' }} style={a} href='#'>{section2}</a>
                    <a onClick={(e)=>Section3(e.target.innerText)} style={a} href='#'>{section3}</a>
                    <a onClick={(e)=>Section4(e.target.innerText)} style={a} href='#'>{section4}</a>
                    <a onClick={(e)=>Section5(e.target.innerText)} style={a} href='#'>{section5}</a>
                    <a  onClick={()=>Section1()} style={a} href='#'>{section1}</a>
                </ul>
                <form class="search">
                    <input onChange={(e) => Research(e.target.value)} class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search"></input>
                    <button class='Sbtn'><i class="fa fa-search"></i></button>
                    <MovieRating StarsResearch={StarsResearchFilter} />
                </form>
                
                
            </nav>

        </div>
    )
}
export default FilterBar