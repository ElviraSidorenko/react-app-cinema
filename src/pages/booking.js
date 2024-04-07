import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import movies from "../data/movies.json";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Booking = () => {
  // Use location hook to get state passed from previous page
  const location = useLocation();
  // State variables to store selected movie, date, time, seats, total price, and modal visibility
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBookingSummary, setShowBookingSummary] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");

  // Use effect to set selected movie if passed from previous page
  useEffect(() => {
    if (location.state && location.state.selectedMovie) {
      setSelectedMovie(location.state.selectedMovie);
    }
  }, [location.state]);

  // Function to handle seat selection and update total price
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
    setShowBookingSummary(true);
    setConfirmationNumber(Math.floor(Math.random() * 1000000000));
  };
  // Function to handle modal close (reload page to reset booking)
  const handleCloseModal = () => {
    window.location.reload();
  };

  return (
    <>
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/nightmares_unleashed_promotion_banner.png`}
      />
      {/* Booking form */}
      <div className="booking-container">
        <h1>Booking Details</h1>
        {/* Movie selection */}
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
        {/* Date selection */}
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
        {/* Time selection */}
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
        {/* Seat selection */}
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
            {/* Display total price based on the selected seats and booking button */}
            <div>Total: ${totalPrice}</div>
            <button onClick={handleBookNow}>Book Now</button>
          </>
        )}
      </div>
      {/* Booking summary modal */}
      {showBookingSummary && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Summary</h2>
            {/* Display selected movie, date, time, theatre, seats, total price */}
            <p>Movie: {selectedMovie}</p>
            <p>Date: {selectedDate}</p>
            <p>Time: {selectedTime}</p>
            <p>Theatre: ${Math.floor(Math.random() * 4) + 1}</p>
            <p>Seats: {selectedSeats.join(", ")}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Confirmation Number: {confirmationNumber}</p>
            <p>
              Terms & Conditions: By confirming your booking, you agree to the
              following terms and conditions: For any modifications or
              cancellations, please directly contact our team. Payment is due
              upon arrival at our premises and should be made at the counter
              with our staff. Should you need to make changes or cancel your
              reservation, reaching out to us directly ensures we can
              accommodate your needs promptly. Please be aware that failure to
              show up for your booking without prior cancellation may incur
              charges. These terms are part of our commitment to providing you
              with clear and concise service expectations.
            </p>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Booking;
