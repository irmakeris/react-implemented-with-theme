import React from "react";
import { Link } from "react-router-dom";
import StarVote from "./StarVote";

function MovieCard(props) {
  const { id, title, poster_path, vote_average } = props.movie;

  return (
    <div className={`col-sm-6 col-md-4 col-lg-3 mb-4`}>
      <div className="card shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div>
            <h5 className="card-title">{title}</h5>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <Link to={`/movie/${id}`} className="btn btn-dark shadow-lg">
                More
              </Link>
            </div>
            <div>
              <StarVote vote={vote_average} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.defaultProps = {
  movie: {
    title: "None",
    img: "https://picsum.photos/id/100/400/300"
  }
};

export default MovieCard;
