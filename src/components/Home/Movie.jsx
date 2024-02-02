// import picture from '../assets/comedy.jpg'
import "./Movie.scss";
import { movies } from "./MovieList.js";

export default function Movie() {

  return (
    <div className="movies-list">
      <div className="wrapper">
        <h5>Continue Watching</h5>
        <div className="items">
          {movies.map(movie => (
            <div className="movie-card" key={movie.id}>
              <img
                src={movie.image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
