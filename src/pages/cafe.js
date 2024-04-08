import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
const CafePage = () => {
  return (
    <>
      <Hero
        title="Cafe Nom Nom: Something for everyone"
        buttonText="DOWLOAD MENU"
        imageUrl={`${process.env.PUBLIC_URL}assets/ice_cream_cafe_promotion.png`}
        isDownload={true}
      />
      <div className="cafe-info">
        <h1>About Us</h1>
        <p>
          Welcome to Cafe Nom Nom, where delectable flavors meet the magic of
          the silver screen. Nestled within the vibrant ambiance of the cinema
          complex, we offer a culinary oasis for moviegoers and food enthusiasts
          alike. At Cafe Nom Nom, we believe that great food enhances every
          cinematic experience, whether you're catching the latest blockbuster
          or indulging in a timeless classic. Our diverse menu caters to every
          taste bud, featuring a fusion of international cuisines crafted with
          care and creativity. From savory bites to sweet delights, our
          offerings are designed to tantalize your senses and elevate your movie
          night to new heights of enjoyment.
        </p>
        <p>
          More than just a place to grab a quick bite before the show, Cafe Nom
          Nom is a destination where friends and family come together to share
          delicious food and create lasting memories. Our cozy yet contemporary
          atmosphere provides the perfect backdrop for relaxation and
          conversation, making it the ideal spot to unwind before or after your
          cinematic adventure. With friendly service and a commitment to
          quality, we strive to ensure that every visit to Cafe Nom Nom is a
          delightful experience that leaves you craving more. So come join us
          and embark on a culinary journey that complements the magic of the
          movies, only at Cafe Nom Nom.
        </p>
        <h2>Our Menu</h2>
        <img
          src={`${process.env.PUBLIC_URL}/assets/NomNom_Cafe_Menu.png`}
          alt="Cafe Menu"
        />
      </div>
      <div className="operations-info">
        <h2>Visit Us</h2>
        <p>
          <strong>Hours of Operation:</strong> Monday - Friday, 8:00 AM - 8:00
          PM | Saturday - Sunday, 9:00 AM - 5:00 PM
        </p>
        <p>
          <strong>Location:</strong> 123 Cinema Street, MovieTown, 4567
        </p>
        <p>
          <strong>Contact:</strong> Email us at{" "}
          <a href="mailto:info@cafenomnom.com">info@cafenomnom.com</a> or call
          us at (123) 456-7890
        </p>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CafePage;
