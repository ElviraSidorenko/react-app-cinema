import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const CafePage = () => {
  return (
    <>
      <Hero
        title="Enjoy deliciousness at our cafe"
        buttonText="Download Our Menu"
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`}
        isDownload={true}
      />
      <div className="cafe-info">
        <h1>Cafe Nom Nom</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nunc ut sollicitudin aliquam, elit tortor lacinia purus,
          nec laoreet nunc mi vel felis. Nullam nec purus eget purus fermentum
          fermentum. Donec nec turpis eget sapien ultrices fermentum. Sed
          malesuada, libero vel fermentum lacinia, nunc felis ultrices libero,
          nec aliquet purus purus a nunc. Nulla facilisi. Nullam nec semper
          turpis. Donec nec libero eget
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, nunc ut sollicitudin aliquam, elit tortor lacinia purus,
          nec laoreet nunc mi vel felis. Nullam nec purus eget purus fermentum
          fermentum. Donec nec turpis eget sapien ultrices fermentum. Sed
          malesuada, libero vel fermentum lacinia, nunc felis ultrices libero,
          nec aliquet purus purus a nunc. Nulla facilisi. Nullam nec semper
          turpis. Donec nec libero eget
        </p>
        <h2>Our Menu</h2>
        <img
          src={`${process.env.PUBLIC_URL}/assets/NomNom_Cafe_Menu.png`}
          alt="Cafe Menu"
        />
      </div>
      <div className="operations-info">
        <h2>Visit Us</h2>
        <p><strong>Hours of Operation:</strong> Monday - Friday, 8:00 AM - 8:00 PM | Saturday - Sunday, 9:00 AM - 5:00 PM</p>
        <p><strong>Location:</strong> 123 Cafe Street, Foodtown, FL 12345</p>
        <p><strong>Contact:</strong> Email us at <a href="mailto:info@cafenomnom.com">info@cafenomnom.com</a> or call us at (123) 456-7890</p>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CafePage;
