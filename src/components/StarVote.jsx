import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarVote(props) {
  return (
    <div>
      {props.vote >= 6.5 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />{" "}
        </div>
      ) : props.vote < 6.5 && props.vote >= 5.0 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
        </div>
      ) : props.vote < 5.0 && props.vote >= 3.5 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
        </div>
      ) : props.vote < 3.5 && props.vote >= 2.0 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
        </div>
      ) : props.vote < 2.0 && props.vote > 0 ? (
        <div>
          <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default StarVote;
