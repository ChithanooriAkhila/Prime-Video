// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
            alt="prime video"
          />
        </div>
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
