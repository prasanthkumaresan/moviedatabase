import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa6'
import './movie.css'

const MovieCard = props => {
  const {movies} = props
  const {id, title, imgUrl, rating} = movies
  return (
    <li className="movie-card">
      <img
        className="card-movieimage"
        src={`https://image.tmdb.org/t/p/w500/${imgUrl}`}
        alt="moviename"
      />
      <p className="card-moviename">{title}</p>
      <div className="card-rating">
        <FaStar color="#cad102" size="1.1rem" />
        <p className="card-movierating">{rating.toFixed(1)}</p>
      </div>
      <Link className="no-link" to={`/movie/${id}`}>
        <button type="button" className="card-viewbtn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
