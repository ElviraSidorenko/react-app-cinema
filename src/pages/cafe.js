import React from 'react';
import Hero from '../components/Hero';

const CafePage = () => {


  return (
    <div>
      <Hero
        title="Welcome to Our Café"
        buttonText="Download Our Menu"
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`} 
        isDownload={true}
      />

    </div>
  );
};

export default CafePage;
