import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Movie from './Movie';
import axios from 'axios';
import './Movie.css'
class App extends React.Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    const { data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies})
    console.log(movies)
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { movies } = this.state
    return (
      <div className="movie-container">
        <SwipeableViews enableMouseEvents>
        {movies.map((movie) => <Movie key={movie.id} title={movie.title} image={movie.large_cover_image} rating={movie.rating} discription={movie.description_full}  />)}
        </SwipeableViews>
      </div>
    )
  }
}

export default App