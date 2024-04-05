import React from "react";
import { FaPlayCircle, FaInfoCircle } from "react-icons/fa";

const MovieTile = ({
  title,
  description,
  movieImg,
  IMDbLink,
  trailerLink,
  movieId,
  onBookNowClick,
}) => {
  return (
    <div className="movie-tile">
      <img src={movieImg} alt={title} />
      <div>
        <a href={IMDbLink}>
          <FaInfoCircle className="iconStyle" />
        </a>
        <a href={trailerLink}>
          <FaPlayCircle className="iconStyle" />
        </a>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onBookNowClick}>Book Now</button>
    </div>
  );
};

export default MovieTile;
