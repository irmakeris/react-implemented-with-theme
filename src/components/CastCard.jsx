import React from "react";

function CastCard(props) {
  const { known_for_department, name, profile_path, character } = props.cast;

  return (
    <div className={`col-sm-4 col-md-3 col-lg-2 mb-4`}>
      <div className="card cardS shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bodyS">
          <div>
            <h5 className="card-title">{name}</h5>
            <div>{known_for_department}</div>
            <div>
              {known_for_department === "Acting" ? (
                <p>
                  {" "}
                  <em>{character}</em>{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CastCard;
