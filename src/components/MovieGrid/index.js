import React from "react";
import MovieTile from "../MovieTile";

const MovieGrid = ({ pageTitle, movies, isBookable }) => {
    return (
        <>
        <h1 className="pageTitle">{pageTitle}</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieTile
            key={index}
            title={movie.title}
            description={movie.description}
            movieImg={movie.movieImg}
            onBookNowClick={() => console.log('Booked')} // You'll need to implement handleBookNow function
          IMDbLink={movie.IMDbLink}
            trailerLink={movie.trailerLink}
            isBookable={isBookable}
          />
        ))}
      </div>
      </>
    );
  };

export default MovieGrid;