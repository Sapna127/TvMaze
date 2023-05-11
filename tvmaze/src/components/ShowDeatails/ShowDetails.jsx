import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './ShowDetails.css'; // Import the CSS file

const ShowDetails = () => {
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        const showDetails = response.data;
        setShow(showDetails);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="show-details">
      {show ? (
        <div className="container">
          <div className="movie-info">
            <h1 className="title">{show.name}</h1>
            <img src={show.image.medium} alt={show.name} className="movie-img" />
            <p className="summary">{show.summary}</p>
            <div className="details">
              <p className="rating">{show.rating.average || 'N/A'}</p>
              <p className="year">{show.premiered}</p>
              <p className="genre">{show.genres.join(' | ')}</p>
              <p className="time">{show.runtime || 'N/A'}</p>
            </div>
            <a href={show.officialSite} target="_blank" rel="noopener noreferrer" className="watch-btn">
            Watch</a>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
