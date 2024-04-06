import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MovieGrid from "../components/MovieGrid";
import movies from "../data/movies.json";
import ScrollToTopButton from "../components/ScrollToTopButton";


const Home = () => {

  return (
    <>
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`}
      />
      <MovieGrid movies={movies} pageTitle="NOW SHOWING" isBookable={true}/>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Home;
