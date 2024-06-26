import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlayCircle, FaInfoCircle } from "react-icons/fa"; // React-icons library for play and info icons

const MovieTile = ({
  title,
  description,
  movieImg,
  IMDbLink,
  trailerLink,
  isBookable,
}) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    // Navigate to '/booking' page and pass selected movie title
    navigate("/booking", { state: { selectedMovie: title } });
  };
  return (
    <div className="movie-tile">
      <div className="movie-tile-img-container"><img src={movieImg} alt={title} /></div>
      <div>
        <a href={IMDbLink} target="blank">
          <FaInfoCircle className="iconStyle" />
        </a>
        <a href={trailerLink} target="blank">
          <FaPlayCircle className="iconStyle" />
        </a>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {/* Conditionally render the "Book Now" button based on the isBookable prop.
          If isBookable is true (Now Showing movies), display the button with an onClick event handler to book the movie.
          If isBookable is false (Upcoming movies), render the button but make it invisible using inline styling (display: "none"). */}
      {isBookable ? (
        <button onClick={handleBookNowClick}>Book Now</button>
      ) : (
        <button style={{ display: "none" }}>Book Now</button>
      )}
    </div>
  );
};

export default MovieTile;
