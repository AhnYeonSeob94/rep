import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const navigate = useNavigate();

  const {data:genreData}= useMovieGenreQuery();
  
  const handleClick=()=>{
    navigate(`/movies/${movie.id}`);
  }

  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList= genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList

  }

  const renderStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating / 2); 
    const hasHalfStar = rating % 2 >= 1; 
  
    for (let i = 0; i < 5; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} className="star">★</span>);
      } else if (i === filledStars && hasHalfStar) {
        stars.push(<span key={i} className="star">☆</span>); 
      } else {
        stars.push(<span key={i} className="star inactive">☆</span>);
      }
    }
  
    return stars;
  };

  return (
    <div
      className='movie-card'
      onClick={handleClick}
      style={{
          backgroundImage:
          "url("+
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`+
          ")",
      }}       
    >
        
        <div className="movie-info">
            <span>{movie.adult ? "🔞" : ""}</span>
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
            <div className="rating-stars">
              {renderStars(movie.vote_average)}
            </div>
            
            <div>🔥 {Math.floor(movie.popularity)}</div>
          </div>

        </div>

    </div>

    

  )
}

export default MovieCard