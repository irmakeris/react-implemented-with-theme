import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div>
      <img src="https://picsum.photos/id/3/400/300" className="w-100" alt="" />
      <div className="text-center">
        <h1>UPPS!! </h1>
        <h1>Not Found</h1>
        <h2>
          <Link to="/" className="">
            Back To The Home Page
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Error;
