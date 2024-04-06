import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Assuming you're using react-icons library for social media icons


const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={leftContentStyle}>
                <a href='/contact' style={contactButtonStyle}>Contact Us</a>
            </div>
            <div style={rightContentStyle}>
                <a href="https://facebook.com"><FaFacebook style={iconStyle} /></a>
                <a href="https://twitter.com"><FaTwitter style={iconStyle} /></a>
                <a href="https://instagram.com"><FaInstagram style={iconStyle} /></a>
            </div>
        </footer>
    );
};

const footerStyle = {

    color: '#fff',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,


};

const leftContentStyle = {
    flex: '1'
};

const rightContentStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
};

const contactButtonStyle = {
    backgroundColor: '#ffcd29',
    color: '#333',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none'
};

const iconStyle = {
    fontSize: '1.5rem',
    marginLeft: '1rem',
    color: '#ffcd29',
    textDecoration: 'none'
};


export default Footer;