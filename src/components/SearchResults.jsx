import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

const API_KEY = "7b6143b00f184cc753a835e91c99fc27";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=/`;

function SearchResults(props) {
  const location = useLocation();
  const { q, setQ } = props;
  const [movies, setMovies] = React.useState([]);
  const [inputted, setInputted] = React.useState(q);
  const history = useHistory();

  const Clicker = event => {
    event.preventDefault();
    history.push(`/search?q=${inputted}`);
  };

  React.useEffect(() => {
    setQ(new URLSearchParams(location.search).get("q"));
    fetch(SEARCH_API + q)
      .then(rsp => rsp.json())
      .then(data => setMovies(data.results));
  }, [location]);

  return (
    <div className="mt-4 pt-5">
      <form className="mb-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-9">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border border-dark"
                    placeholder={q ? q : "Enter a movie"}
                    name="inputted"
                    onChange={event => setInputted(event.target.value)}
                  />
                </div>
                <div className="col">
                  <button
                    onClick={Clicker}
                    type="submit"
                    className="btn btn-success text-light border border-light"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container mt-5 d-flex flex-wrap">
        <div className="movie_container">
          {movies
            .filter(item => item.poster_path)
            .filter(
              item =>
                !item.title.includes("Null") &&
                !item.title.includes("Zero") &&
                !item.title.includes("NULL")
            )
            .map(item => (
              <MovieCard key={item.id} movie={item} />
            ))}
        </div>
      </div>
    </div>
  );
}
export default SearchResults;
