import React, { useEffect, useState } from 'react'
import BackArrow from "../../assets/back_arrow_icon.png"
import "./Player.css"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  
  const {id} = useParams();
  const navigate = useNavigate()
  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGEwYmMzZDZlZDQxZjZkNDhjN2QyODZiOTNkM2QyZSIsIm5iZiI6MTc0NjExMjQ1OC4yNzYsInN1YiI6IjY4MTM4ZmNhZWI5NDVmYmUwMDI5YmQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BXlOdqwaxxbRI43CYqpAkYB1spYUKppF_LkM75tviGE'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  

  return (
    <div className='player'>
      <img src = {BackArrow} alt = "back_arrow" onClick={()=>navigate(-2)}/>
      <iframe width={'90%'} height={"90%"} src = {`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder={'0'} allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>

    </div>
  )
}

export default Player
