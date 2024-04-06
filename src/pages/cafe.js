import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const CafePage = () => {


  return (
    <>
      <Hero
        title="Welcome to Our Café"
        buttonText="Download Our Menu"
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`} 
        isDownload={true}
      />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default CafePage;
