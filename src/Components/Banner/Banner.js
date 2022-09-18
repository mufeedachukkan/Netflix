import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      var results = response.data.results
      setMovie(results[Math.floor(Math.random()*results.length)])
    }) 
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className="content">
            <h3 className="title">{movie ? movie.title : ""}</h3>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>

        <div className="fade_bottom">
          <h2 className='orginal'>Netflix Originals</h2>
        </div>
    </div>
  )
}

export default Banner