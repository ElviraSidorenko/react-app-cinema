import React from "react";

const Hero = ({ title, buttonText, buttonLink, isDownload, imageUrl }) => {
  // Determine the href for the anchor element
  const href = isDownload
    ? `${process.env.PUBLIC_URL}/assets/NomNom_Cafe_Menu.png`
    : buttonLink;

  // Determine the download attribute value
  // const download = isDownload ? "NomNom_Cafe_Menu.png" : undefined;
  const download = isDownload && "NomNom_Cafe_Menu.png";

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <a href={href} download={download} className="button-like-anchor">
            {buttonText}
          </a>
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
