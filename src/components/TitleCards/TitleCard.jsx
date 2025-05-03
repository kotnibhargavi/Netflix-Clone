  import React, { useEffect, useState } from 'react'
  import "./TitleCard.css"
import { Link } from 'react-router-dom';
  


  const TitleCard = ({title, category}) => {
    const [apiData,setApiData] = useState([])

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGEwYmMzZDZlZDQxZjZkNDhjN2QyODZiOTNkM2QyZSIsIm5iZiI6MTc0NjExMjQ1OC4yNzYsInN1YiI6IjY4MTM4ZmNhZWI5NDVmYmUwMDI5YmQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BXlOdqwaxxbRI43CYqpAkYB1spYUKppF_LkM75tviGE'
      }
    };
    
   
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    },[])
    return (
      <div className='title-cards'>
        <h2>{title?title:"Popular Movies on Netflix"}</h2>
        <div className="card-list">
          {apiData.map((card,index)=>{
            return <Link to = {`/player/${card.id}`} 
            className="card" 
            key = {index}>
            <img src = {`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}/>
            <p>{card.original_title}</p>
            </Link>
          })}
        </div>
        
      </div>
    )
  }

  export default TitleCard
