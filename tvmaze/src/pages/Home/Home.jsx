import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Home.module.css";
import Card from "../../UI/Card/Card";
import './Home.css'
const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => setShows(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section>
        <h1>TvMaze</h1>
        <div className="container">
          {shows.map((show) => (
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  {show.show.image && show.show.image.medium && (
                    <img src={show.show.image.medium} alt={show.show.name} />
                  )}
                </div>
                <div className="contentBx">
                  <h3>
                    {show.show.name}
                    <br />
                    <span>{show.show.genres.join(" | ")}</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <Link to={`/shows/${show.show.id}`}>See Details</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
