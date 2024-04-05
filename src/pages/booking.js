import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Booking = () => {
  return (
    <>
      {" "}
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`}
      />
      <div>
        <h1>Book Your Movie</h1>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
