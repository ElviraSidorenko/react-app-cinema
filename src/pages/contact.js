import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useState } from "react";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Show the modal
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    window.location.reload();
  };

  const ThankYouModal = () => (
    <div className="modal-background">
      <div className="modal-content">
        <p>Thank you, someone will get back to you soon.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
  return (
    <>
      <Hero
        title="Experience the Magic of Cinema with Us"
        buttonText="BOOK NOW"
        buttonLink="/booking"
        isDownload={false}
        imageUrl={`${process.env.PUBLIC_URL}/assets/empty-theatre-cinema-seats.jpg`}
      />
      <div className="history-section">
        <h2>Est. 1974</h2>
        <p>
          For nearly half a century, we've been at the forefront of cinematic
          experiences, offering moments of joy, thrill, and profound emotions to
          generations. Dive into our journey and become part of our story.
        </p>
      </div>

      <div className="contact-section">
        <h2>GET IN TOUCH</h2>
        <p>
          Have a question or need assistance? Fill out the form below, and we'll
          help you out.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="inquiryType">Inquiry Type</label>
            <select id="inquiryType" name="inquiryType" required>
              <option value="">Please select</option>
              <option value="change/cancel booking">
                Change/Cancel Existing Booking
              </option>
              <option value="private hire">Private Hire</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {/* Modal */}
      {showModal && <ThankYouModal />}
      <div className="where-to-find-us">
        <div className="map">
          <img
            src={`${process.env.PUBLIC_URL}/assets/map_sample.jpeg`}
            alt="Map"
          />
        </div>
        <div className="address-and-contact">
          <h3>Where to Find Us</h3>
          <p>123 Cinema Street, MovieTown, 4567</p>
          <p>Email: contact@cinemamagic.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Contact;
