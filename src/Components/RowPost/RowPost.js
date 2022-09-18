import React, { useEffect,useState } from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  },[])
  
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("array empty")
      }
    })
  }
  return (
    <div className="row">
      <h2 class="subTitle">{props.title ? props.title : ""} </h2>
      <div className="posters">
        {movies.map((obj)=>
                  <img onClick={()=>handleMovie(obj.id)} class={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost