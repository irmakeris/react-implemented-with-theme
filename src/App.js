import React, { useState, useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navi from "./components/Navi";
import ReadMore from "./components/ReadMore";
//import Error from "./components/error/Err";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Popular from "./components/Popular";

const API_KEY = "7b6143b00f184cc753a835e91c99fc27";

export default function App() {
  const [popular, setPopular] = useState([]);
  const [q, setQ] = React.useState("");

  const PRO_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;

  useEffect(() => {
    fetch(PRO_API)
      .then(response => response.json())
      .then(info => {
        setPopular(info.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navi />
      <Switch>
        <Route exact path="/">
          <Popular popular={popular} q={q} setQ={setQ} />
        </Route>

        <Route path="/search">
          <SearchResults q={q} setQ={setQ} />
        </Route>

        <Route path="/movie/:movieID">
          <ReadMore q={q} setQ={setQ} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
