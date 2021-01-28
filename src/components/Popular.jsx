import React from "react";
import MovieCard from "./MovieCard";
import SearchResults from "./SearchResults";

function Popular(props) {
  const { popular, q, setQ } = props;

  return (
    <div className="container mt-3 mb-5">
      <SearchResults q={q} setQ={setQ} />
      <div className="movie_container">
        {popular
          .filter(item => item.poster_path)
          .map(item => (
            <MovieCard key={item.id} movie={item} sm={3} />
          ))}
      </div>
    </div>
  );
}
export default Popular;
