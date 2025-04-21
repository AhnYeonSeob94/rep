import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const MovieCard = ({movie}) => {

  const {data:genreData}= useMovieGenreQuery()
  
  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList= genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList

  }

  return (
    <div
      className='movie-card'
      style={{
          backgroundImage:
          "url("+
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`+
          ")",
      }}       
    >
        MovieCard
        <div className="movie-info">
            <span>{movie.adult ? "🔞 Over 18" : "🧒 Under 18"}</span>
        </div>

        <div className='overlay p-2'>
          <div>
            <h5>{movie.title}</h5>
            <div>
            {showGenre(movie.genre_ids).map((genre, index)=>(
              <Badge bg="danger" key={index} className='me-1'>
                {genre}
              </Badge>
              ))}
            </div>
          </div>
        
          <div className="meta-info mt-2">
            <div>⭐ {movie.vote_average}</div>
            <div>🔥 {Math.floor(movie.popularity)}</div>
          </div>

        </div>

    </div>

    

  )
}

export default MovieCard