import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import PopMovies from './components/PopMovies/popular'
import TopRated from './components/TopRated/top'
import UpcomingMovies from './components/UpcomingMovies/up'
import SinglePage from './components/SinglePage/single'
import SearchPage from './components/SearchPage/search'
import './App.css'

// write your code here
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PopMovies} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/upcoming" component={UpcomingMovies} />
        <Route exact path="/movie/:id" component={SinglePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    )
  }
}

export default App
