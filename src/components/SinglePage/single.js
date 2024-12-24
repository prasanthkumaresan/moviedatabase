import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {FaStar} from 'react-icons/fa6'
import Navbar from '../Navbar/navbar'
import Cast from '../Cast/cast'
import './single.css'

class SinglePage extends Component {
  state = {
    movieDetails: {},
    isLoading: true,
    castDetails: [],
    isCastLoading: true,
  }

  componentDidMount() {
    this.getData()
    this.getCastData()
  }

  getCastData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const api = '295fb6123d91d7f81de5505e2096f11a'
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api}&language=en-US`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.cast)
    const formatedData = data.cast.map(each => ({
      id: each.id,
      character: each.character,
      name: each.original_name,
      profile: each.profile_path,
    }))
    this.setState({castDetails: formatedData, isCastLoading: false})
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const api = '295fb6123d91d7f81de5505e2096f11a'
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`
    const response = await fetch(url)
    const data = await response.json()
    const formatedData = {
      id: data.id,
      overview: data.overview,
      title: data.original_title,
      imgUrl: data.poster_path,
      releaseDate: data.release_date,
      runtime: data.runtime,
      rating: data.vote_average,
      genres: data.genres.map(each => each.name),
    }
    console.log(formatedData)
    this.setState({movieDetails: formatedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="products-loader-container loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {movieDetails, isLoading, castDetails, isCastLoading} = this.state
    return (
      <>
        {isLoading && this.renderLoader()}
        {!isLoading && (
          <>
            <Navbar />
            <div className="single-maincont">
              <div className="single-imgcont">
                <img
                  className="single-movieimg"
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.imgUrl}`}
                  alt={movieDetails.title}
                />
              </div>
              <div className="single-moviedesc">
                <h1 className="single-moviename">{movieDetails.title}</h1>
                <div className="single-rating">
                  <p className="single-title">RATING</p>
                  <div className="rating-contsingle">
                    <FaStar color="#cad102" size="0.9rem" />
                    <p className="single-ratinganswer">{movieDetails.rating}</p>
                  </div>
                </div>
                <div className="single-arranger">
                  <p className="single-title">DURATION</p>
                  <p className="single-answer">{movieDetails.runtime} min</p>
                </div>
                <div className="single-arranger">
                  <p className="single-title">GENRES</p>
                  <p className="single-answer">
                    {movieDetails.genres.join(', ')}
                  </p>
                </div>
                <div className="single-arranger">
                  <p className="single-title">RELEASE DATE</p>
                  <p className="single-answer">{movieDetails.releaseDate}</p>
                </div>
                <div className="overview-cont">
                  <p className="single-overview">Overview</p>
                  <p className="single-answer">{movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </>
        )}
        {isCastLoading && this.renderLoader()}
        {!isCastLoading && (
          <ul className="movie-ul">
            {castDetails.map(each => (
              <Cast key={each.id} person={each} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default SinglePage
