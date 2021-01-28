import React from "react";
import "./componentCSSs/rev_card.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdn } from "@fortawesome/free-brands-svg-icons";

function RevCard(props) {
  const { username, avatar_path, rating } = props.rev.author_details;
  const { content } = props.rev;
  const newContent = content.substr(0, 250);

  const [loadMore, setLoadMore] = React.useState(false);
  const linkName = loadMore ? "Load Less" : "Load More";
  const extra = content.substr(250);

  return (
    <div className={`col-sm-6 col-md-4 mb-4`}>
      <div className="card cardS shadow-lg">
        <div className="card-body bodyS">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-start">
                <div>
                  <img
                    src={
                      avatar_path
                        ? avatar_path.slice(1, avatar_path.length)
                        : "https://secure.gravatar.com/avatar/0cb956fc1daf59cfd92f71c55432b20e.jpg"
                    }
                    // src={`https://image.tmdb.org/t/p/w500/${avatar_path}`}
                    className="rounded-circle imgS mb-1"
                    alt="..."
                  />
                </div>
                <div>
                  <h5 className="card-title ml-2">
                    <em>'{username}'</em>
                  </h5>
                </div>
              </div>
              <div>
                <p>Rated: {rating}</p>
              </div>
            </div>
            <p>
              {newContent}...
              <Link
                className="col mb-5 "
                onClick={() => {
                  setLoadMore(!loadMore);
                }}
              >
                {linkName}
              </Link>
              <div>{loadMore && extra}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RevCard;
