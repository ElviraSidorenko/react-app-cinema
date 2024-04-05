import React from "react";

const Hero = ({ title, buttonText, buttonLink, isDownload, imageUrl }) => {
  const handleClick = () => {
    if (isDownload) {
      // If it's a download button, initiate PDF download
      // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
      const link = document.createElement("a");
      link.href = `${process.env.PUBLIC_URL}/assets/Beasty_Menu_March_2024.pdf`;
      link.setAttribute("download", "Beasty_Menu_March_2024.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } else {
      // If it's a button to another page, redirect to the specified link
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{title}</h1>
          <button onClick={handleClick}>{buttonText}</button>
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
