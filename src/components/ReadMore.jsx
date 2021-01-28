import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";
import CastCard from "./CastCard";
import RevCard from "./RevCard";
import "../style.css";
import "./componentCSSs/read_more.css";
const API_KEY = "7b6143b00f184cc753a835e91c99fc27";

function ReadMore(props) {
  const [movie, setMovie] = useState([]);
  const [similars, setSimilars] = useState([]);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  const MOVIE_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }?api_key=${API_KEY}&language=en-US/`;

  const SIM_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }/similar?api_key=${API_KEY}&language=en-US&page=1`;

  const CAST_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }/credits?api_key=${API_KEY}&language=en-US`;

  const REV_API = `https://api.themoviedb.org/3/movie/${
    params.movieID
  }/reviews?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const axios = require("axios").default;

    axios.get(MOVIE_API).then(response => {
      setMovie(response.data);
    });

    axios.get(SIM_API).then(response => {
      setSimilars(response.data.results);
    });

    axios.get(CAST_API).then(response => {
      setCast(response.data.cast);
    });

    axios.get(REV_API).then(response => {
      setReviews(response.data.results);
    });
  }, [movie]);

  const [readMore, setReadMore] = useState(false);
  const linkName = readMore ? "Read Less" : "Read More";
  const extra = cast
    .filter(item => item.known_for_department != "Crew")
    .filter(item => item.profile_path)
    .slice(6)
    .map(item => <CastCard key={item.cast_id} cast={item} />);

  const [loadMore, setLoadMore] = useState(false);
  const linkName2 = loadMore ? "Load Less" : "Load More";
  const extraRevs = reviews
    .filter(item => item.author_details.rating)
    .slice(3)
    .map(item => <RevCard key={item.id} rev={item} sm={4} />);

  return (
    <div className="mt-4 pt-5">
      <div className="col-sm-6 offset-sm-3 mt-5">
        <nav aria-label="breadcrumb" className="mb-5">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="text-dark" to="/">
                Popular
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                className="text-dark"
                to={props.q === null ? `/` : `/search?q=${props.q}`}
              >
                Back
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {movie.title}
            </li>
          </ol>
        </nav>

        <div className="d-flex flex-wrap justify-content-center">
          <img
            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${
              movie.backdrop_path
            }`}
            className="img-fluid "
          />

          <div className="card-body" style={{ width: 20 + "rem" }}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Status: {movie.status}</p>
            {movie.status === "Released" ? (
              <p>Revenue: {movie.revenue} </p>
            ) : (
              ""
            )}
            <p>Runtime: {movie.runtime} minutes</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start font-weight-bold">
                <div>
                  {movie.vote_average >= 6.5 ? (
                    <label className="btn btn-success disabled rounded-pill mb-5">
                      {movie.vote_average}
                    </label>
                  ) : (
                    <label className="btn btn-danger disabled rounded-pill">
                      {movie.vote_average}
                    </label>
                  )}
                </div>
              </div>
              <p>{movie.release_date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {movie.status === "Released" ? (
            <div>
              <h2 className="mb-3 mt-5 text-dark ml-3">CAST: </h2>
              <div className="d-flex flex-wrap">
                {cast
                  ? cast
                      .filter(item => item.known_for_department == "Acting")
                      .filter(item => item.profile_path)
                      .slice(0, 6)
                      .map(item => <CastCard key={item.cast_id} cast={item} />)
                  : null}
              </div>
              <Link
                to="#"
                className="col mb-5 "
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                {cast
                  .filter(item => item.known_for_department == "Acting")
                  .filter(item => item.profile_path).length > 3 ? (
                  <p>{linkName} </p>
                ) : (
                  ""
                )}
              </Link>
              <div className="d-flex flex-wrap">{readMore && extra}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="container">
        <div className="row">
          {movie.status === "Released" && reviews.length > 0 ? (
            <h2 className="mb-3 mt-5 text-dark ml-3">REVIEWS: </h2>
          ) : (
            ""
          )}
          <div className="row">
            <div className="d-flex flex-wrap">
              {reviews
                ? reviews
                    .filter(item => item.author_details.rating)
                    .slice(0, 3)
                    .map(item => <RevCard key={item.id} rev={item} />)
                : null}
            </div>
            <div>
              <div className="row">
                <Link
                  to="#"
                  className="col mb-3 ml-3"
                  onClick={() => {
                    setLoadMore(!loadMore);
                  }}
                >
                  {reviews.filter(item => item.author_details.rating).length >
                  3 ? (
                    <p>{linkName2} </p>
                  ) : (
                    ""
                  )}
                </Link>{" "}
              </div>
            </div>
            <div className="d-flex flex-wrap">{loadMore && extraRevs}</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {similars.length > 0 ? (
            <h2 className="mb-3 mt-5 text-dark ml-3">SIMILAR MOVIES: </h2>
          ) : (
            ""
          )}

          <div className="d-flex flex-wrap">
            {similars
              ? similars
                  .filter(item => item.poster_path)
                  .map(item => <MovieCard key={item.id} movie={item} sm={3} />)
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadMore;
