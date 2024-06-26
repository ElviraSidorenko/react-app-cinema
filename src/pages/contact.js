import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { useState } from "react";

const Contact = () => {
  // State to show/hide the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Show the modal
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    // Reload the page to clear the form
    window.location.reload();
  };
  // Modal component
  const ThankYouModal = () => (
    <div className="modal">
      <div className="contact-modal-content">
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
        imageUrl={`${process.env.PUBLIC_URL}/assets/nightmares_unleashed_promotion_banner.png`}
      />

      <div className="history-section">
        <h1>Our History: «Est. 1974»</h1>
        <img
          alt="History bulding"
          src={`${process.env.PUBLIC_URL}/assets/history-img.jpeg`}
        ></img>
        <p>
          Established in 1974, Tongariro Cinema has been a cornerstone of the
          community, offering more than just a place to watch films; it's a
          cultural hub where memories are made and shared. From its humble
          beginnings as a single-screen venue, Tongariro Cinema has grown over
          the decades into a beloved cinema complex, maintaining its charm and
          commitment to bringing the magic of movies to generations of film
          enthusiasts. Throughout its illustrious history, Tongariro Cinema has
          evolved, embracing technological advancements to enhance the viewing
          experience, while staying true to its roots by offering a curated
          selection of films that cater to all tastes. As we look back over the
          years, we are filled with pride for the role we've played in the lives
          of our patrons and the enduring legacy of Tongariro Cinema as a place
          where stories come to life.
        </p>
      </div>

      <div className="contact-section">
        <h2>GET IN TOUCH</h2>
        <p>
          Have a question or need assistance? Fill out the form below, and we'll
          help you out.
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Select element for inquiry type */}
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
          {/* Name, email, phone, and message input fields */}
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

      {/* Where to find us section */}
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
