import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Upcoming = () => {
  return (
    <>
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`}
      />
      <Footer />
    </>
  );
};

export default Upcoming;
