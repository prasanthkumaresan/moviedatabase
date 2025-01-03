import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import MovieCard from '../MovieCard/movie'
import Navbar from '../Navbar/navbar'
import Pagination from '../Pagination/num'

const SearchPage = () => {
  const [searchData, setSearchData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const value = searchParams.get('movie')
  useEffect(async () => {
    const api = '295fb6123d91d7f81de5505e2096f11a'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${value}&page=1`
    const response = await fetch(url)
    const data = await response.json()
    const formatedData = data.results.map(each => ({
      id: each.id,
      title: each.title,
      imgUrl: each.poster_path,
      rating: each.vote_average,
    }))
    setSearchData(formatedData)
    setIsLoading(false)
  }, [value])
  const renderLoader = () => (
    <div className="products-loader-container loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )
  const currentPgsetter = val => {
    setCurrentPage(val)
  }
  const elPerPage = 6
  const startIndex = elPerPage * (currentPage - 1)
  const endIndex = startIndex + elPerPage
  const slicedList = searchData.slice(startIndex, endIndex)
  return (
    <>
      {isLoading && renderLoader()}
      {!isLoading && (
        <>
          <Navbar />
          <h1 className="pop-header">Search Results</h1>
          <ul className="movie-ul">
            {slicedList.map(each => (
              <MovieCard key={each.id} movies={each} />
            ))}
          </ul>
          <Pagination
            currentPgsetter={currentPgsetter}
            renderList={searchData}
            elPerPage={elPerPage}
            currentPage={currentPage}
          />
        </>
      )}
    </>
  )
}

export default SearchPage
