import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar/navbar'
import MovieCard from '../MovieCard/movie'
import Pagination from '../Pagination/num'
import './up.css'

class UpcomingMovies extends Component {
  state = {upList: [], isLoading: true, currentPage: 1}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiKey = '295fb6123d91d7f81de5505e2096f11a'
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.results)
    const formatedData = data.results.map(each => ({
      title: each.original_title,
      imgUrl: each.poster_path,
      id: each.id,
      rating: each.vote_average,
    }))
    this.setState({upList: formatedData, isLoading: false})
  }

  renderLoader = () => (
    <div className="products-loader-container loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  currentPgsetter = val => {
    this.setState({currentPage: val})
  }

  render() {
    const {upList, isLoading, currentPage} = this.state
    const elPerPage = 6
    const startIndex = elPerPage * (currentPage - 1)
    const endIndex = startIndex + elPerPage
    const slicedList = upList.slice(startIndex, endIndex)
    return (
      <>
        {isLoading && this.renderLoader()}
        {!isLoading && (
          <>
            <Navbar current="upcoming" />
            <h1 className="pop-header">Upcoming movies</h1>
            <ul className="movie-ul">
              {slicedList.map(each => (
                <MovieCard key={each.id} movies={each} />
              ))}
            </ul>
            <Pagination
              currentPgsetter={this.currentPgsetter}
              renderList={upList}
              elPerPage={elPerPage}
              currentPage={currentPage}
            />
          </>
        )}
      </>
    )
  }
}

export default UpcomingMovies
