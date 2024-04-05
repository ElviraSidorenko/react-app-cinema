
import React from "react";
import Hero from "../components/Hero";


const Upcoming = () => {
	return (
		<Hero title='Experience the Magic of Cinema with Us' buttonText='BOOK NOW' buttonLink='/booking' isDownload={false} imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`} />
	);
};

export default Upcoming;
