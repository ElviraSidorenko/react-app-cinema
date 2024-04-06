import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import movies from "../data/movies.json";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Booking = () => {
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBookingSummary, setShowBookingSummary] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedMovie) {
      setSelectedMovie(location.state.selectedMovie);
    }
  }, [location.state]);

  // Function to handle seat selection
  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
      setTotalPrice(totalPrice - 20);
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setTotalPrice(totalPrice + 20);
    }
  };

  // Function to handle booking submission
  const handleBookNow = () => {
    // Handle booking submission logic here
    setShowBookingSummary(true);
    // You can implement the booking submission logic here, like sending data to server, generating confirmation number, etc.
  };

  const handleCloseModal = () => {
    window.location.reload();
    // setSelectedMovie("");
    // setSelectedDate("");
    // setSelectedTime("");
    // setSelectedSeats([]);
    // setTotalPrice(0);
    // setShowBookingSummary(false);
    // Optionally, you can also navigate the user to a specific route, for a full page refresh use:
    // window.location.reload();
    // Or for a soft reset without reloading, just hide the modal and reset states as above.
  };


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
      <div className="booking-container">
        <h1>Booking Details</h1>
        <label htmlFor="movieSelection">Movie Selection:</label>
        <select
          id="movieSelection"
          value={selectedMovie}
          onChange={(e) => setSelectedMovie(e.target.value)}
        >
          <option value="">Select Movie</option>
          {movies.map((movie) => (
            <option key={movie.id} value={movie.title}>
              {movie.title}
            </option>
          ))}
        </select>
        {selectedMovie && (
          <>
            <label htmlFor="dateSelection">Date:</label>
            <select
              id="dateSelection"
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Select Date</option>
              {/* Populate dates based on selected movie */}
              {movies.find((movie) => movie.title === selectedMovie)
                ?.showtimes &&
                Object.keys(
                  movies.find((movie) => movie.title === selectedMovie)
                    .showtimes
                ).map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
            </select>
          </>
        )}
        {selectedDate && (
          <>
            <label htmlFor="timeSelection">Time:</label>
            <select
              id="timeSelection"
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select Time</option>
              {/* Populate times based on selected movie and date */}
              {movies
                .find((movie) => movie.title === selectedMovie)
                .showtimes[selectedDate].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>
          </>
        )}
        {selectedTime && (
          <>
            <h2>Select Your Seats</h2>
            <div className="seatGrid">
              {/* Generate seat grid */}
              {Array.from({ length: 10 }, (_, row) => (
                <div key={row} className="seatRow">
                  {Array.from({ length: 12 }, (_, col) => {
                    const seat = String.fromCharCode(65 + col) + (row + 1);
                    return (
                      <div
                        key={seat}
                        className={`seat ${
                          selectedSeats.includes(seat) ? "selected" : ""
                        }`}
                        onClick={() => handleSeatSelection(seat)}
                      >
                        {seat}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div>Total: ${totalPrice}</div>
            <button onClick={handleBookNow}>Book Now</button>
          </>
        )}
      </div>
      {showBookingSummary && (
        <div className="modal">
          <div className="modal-content">
            {/* Display booking summary */}
            <h2>Booking Summary</h2>
            {/* Display selected movie, date, time, seats, total price */}
            <p>Movie: {selectedMovie}</p>
            <p>Date: {selectedDate}</p>
            <p>Time: {selectedTime}</p>
            <p>Seats: {selectedSeats.join(", ")}</p>
            <p>Total Price: ${totalPrice}</p>
            {/* You can add more details and confirmation number */}
            <p>Confirmation Number: ABC123</p>
            {/* Add terms and conditions */}
            <p>Terms & Conditions: ...</p>
            <button className="close-button" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Booking;
