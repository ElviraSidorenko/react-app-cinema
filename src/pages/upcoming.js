import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieGrid from "../components/MovieGrid";  
import upcomingMovies from "../data/upcomingMovies.json";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Upcoming = () => {
  return (
    <>
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/nightmares_unleashed_promotion_banner.png`}
      />
      <MovieGrid movies={upcomingMovies} pageTitle="COMING SOON" isBookable={false} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Upcoming;
