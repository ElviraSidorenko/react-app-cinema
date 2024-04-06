import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaInfoCircle } from "react-icons/fa";

const MovieTile = ({
  title,
  description,
  movieImg,
  IMDbLink,
  trailerLink,
  isBookable
}) => {

  const navigate = useNavigate(); // Use useNavigate hook

  const handleBookNowClick = () => {
    // Navigate to '/booking' page and pass selected movie title
    navigate('/booking', { state: { selectedMovie: title } });
  };
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
        <button onClick={handleBookNowClick}>Book Now</button>
      ) : (
        <button style={{ display: "none" }}>Book Now</button>
      )}
    </div>
  );
};

export default MovieTile;
