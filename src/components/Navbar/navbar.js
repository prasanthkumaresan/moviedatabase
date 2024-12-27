import {useState} from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaSearch} from 'react-icons/fa'
import './navbar.css'

const Navbar = ({current}) => {
  const [mobNav, setMobNav] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const mobTrigger = () => {
    setMobNav(prev => !prev)
  }

  const searchTrigger = () => {
    setShowSearch(prev => !prev)
  }

  const onSearchChange = event => {
    setSearchInput(event.target.value)
  }
  return (
    <div className="nav-maincont">
      <div className="nav-mainel">
        <h1 className="nav-logo">MovieDB</h1>
        <div className="nav-contLink">
          <button onClick={searchTrigger} type="button" className="nav-hambtn">
            <FaSearch size="1rem" color="white" />
          </button>
          <button onClick={mobTrigger} type="button" className="nav-hambtn">
            <GiHamburgerMenu size="1rem" color="white" />
          </button>
        </div>
        <div className="max-navcontLink">
          <div className="maxsearch-cont">
            <input
              className="maxnav-input"
              type="search"
              value={searchInput}
              onChange={onSearchChange}
              placeholder="Search.."
            />
            <Link className="no-link" to={`/search?movie=${searchInput}`}>
              <button className="maxnav-searchbtn" type="button">
                <FaSearch size="1rem" color="white" />
              </button>
            </Link>
          </div>
          <Link className="no-link" to="/">
            <h1
              className={
                current === 'popular'
                  ? 'maxnav-links active-link'
                  : 'maxnav-links'
              }
            >
              Popular
            </h1>
          </Link>
          <Link className="no-link" to="/top-rated">
            <h1
              className={
                current === 'toprated'
                  ? 'maxnav-links active-link'
                  : 'maxnav-links'
              }
            >
              Top Rated
            </h1>
          </Link>
          <Link className="no-link" to="/upcoming">
            <h1
              className={
                current === 'upcoming'
                  ? 'maxnav-links active-link'
                  : 'maxnav-links'
              }
            >
              Upcoming
            </h1>
          </Link>
        </div>
      </div>
      {showSearch && (
        <div className="navsearch-cont">
          <input
            className="nav-input"
            type="search"
            value={searchInput}
            onChange={onSearchChange}
            placeholder="Search for movies.."
          />
          <Link className="no-link" to={`/search?movie=${searchInput}`}>
            <button className="nav-searchbtn" type="button">
              <FaSearch size="1rem" color="white" />
            </button>
          </Link>
        </div>
      )}
      {mobNav && (
        <div className="nav-responsive">
          <Link className="no-link" to="/">
            <h1
              className={
                current === 'popular' ? 'nav-links active-link' : 'nav-links'
              }
            >
              Popular
            </h1>
          </Link>
          <Link className="no-link" to="/top-rated">
            <h1
              className={
                current === 'toprated' ? 'nav-links active-link' : 'nav-links'
              }
            >
              Top Rated
            </h1>
          </Link>
          <Link className="no-link" to="/upcoming">
            <h1
              className={
                current === 'upcoming'
                  ? 'nav-links active-link'
                  : 'maxnav-links'
              }
            >
              Upcoming
            </h1>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
