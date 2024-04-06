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
  isBookable
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
      {isBookable ? (
        <button onClick={onBookNowClick}>Book Now</button>
      ) : (
        <button style={{ display: "none" }}>Book Now</button>
      )}
    </div>
  );
};

export default MovieTile;
