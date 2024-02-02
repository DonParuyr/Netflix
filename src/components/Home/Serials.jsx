// import picture from '../assets/comedy.jpg'
import './Movie.scss'
import {serials} from './MovieList.js'

export default function Movie() {
  return (
    <div className='movies-list'>
      <div className="wrapper">
        <h5>Popular Serials</h5>
        <div className="items">
          {serials.map( movie => (
            <div className="movie-card"  key={movie.id}>
              <img src={movie.image} alt=""/>
            </div>
          ))}
        </div>
       
      </div>

    </div>

  )
}