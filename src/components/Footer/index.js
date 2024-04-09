import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // React-icons library for social media icons


const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-content">
                <a href='/contact' className="contact-button">Contact Us</a>
            </div>
            <div className="right-content">
                <a href="https://facebook.com" target="blank"><FaFacebook className="icon" /></a>
                <a href="https://twitter.com" target="blank"><FaTwitter className="icon" /></a>
                <a href="https://instagram.com" target="blank"><FaInstagram className="icon" /></a>
            </div>
        </footer>
    );
};


export default Footer;