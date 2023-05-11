import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ShowDetails.css"; // Import the CSS file

const ShowDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        const showDetails = response.data;
        setShow(showDetails);
      })
      .catch((error) => console.log(error));
  }, [id]);

  useEffect(() => {
    if (show && show.image && show.image.medium) {
      document.body.style.background = `url(${show.image.medium}) no-repeat center center fixed`;
      document.body.style.backgroundSize = "cover";
    }
    return () => {
      document.body.style.background = "";
    };
  }, [show]);

  return (
    <div className="whole">
      <div></div>
      <div className="show-details">
        {show ? (
          <div className="wrapper" key={show.id}>
            <div className="main_card">
              <div className="card_left">
                <div className="card_details">
                  <h1>{show.name}</h1>
                  <div className="card_cat">
                    <p className="PG">{show.rating?.average || "N/A"}</p>
                    <p className="year">{show.premiered}</p>
                    <p className="genre">{show.genres?.join(" | ")}</p>
                    <p className="time">{show.runtime || "N/A"}</p>
                  </div>
                  <p className="disc">{show.summary}</p>

                  <div className="social-btn">
                    <a
                      href={show.officialSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>WATCH NOW</button>
                    </a>

                    {/* GET */}
                    <button>DOWNLOAD</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_container">
              {/* Render show image here if needed */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
