import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
      <div className="container">
        <div className="social-icons">
          <a href=" " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-4" /> {/* Increased margin to mr-4 */}
          </a>
          <a href=" " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="mr-4" /> {/* Increased margin to mr-4 */}
          </a>
          <a href=" " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Conditions of Use & Sale Privacy Notice Interest-Based Ads ©1996–2023, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
