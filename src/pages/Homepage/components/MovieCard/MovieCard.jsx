import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css';

const MovieCard = ({movie}) => {
  return (
    <div
    style={{
        backgroundImage:
        "url("+
        `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`+
        ")",
        }}
        className='movie-card'
        >
        MovieCard
        <div className="movie-info">
            <span>{movie.adult ? "🔞 Over 18" : "🧒 Under 18"}</span>
        </div>

        <div className='overlay'>
            <h5>{movie.title}</h5>
            {movie.genre_ids.map((id)=>(<Badge bg="danger" key={id}>{id}</Badge>))}
        </div>
        <div className="meta-info">
          <div>⭐ {movie.vote_average}</div>
          <div>🔥 {Math.floor(movie.popularity)}</div>
        </div>

    </div>

    

  )
}

export default MovieCard