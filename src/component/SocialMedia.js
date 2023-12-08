// SocialMediaIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-4">
      {/* Twitter Icon */}
      <a href="https://twitter.com/binasaffron" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mx-2" size="2x" />
      </a>

      {/* Instagram Icon */}
      <a href="https://www.instagram.com/binasaffron/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-pink-500 mx-2" size="2x" />
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/company/binasaffron/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 mx-2" size="2x" />
      </a>

      {/* WhatsApp Icon */}
      <a href="https://api.whatsapp.com/message/WZCEHFNAUZA5G1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mx-2" size="2x" />
      </a>

      {/* Telegram Icon */}
      <a href="https://t.me/binasaffron" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegram} className="text-blue-400 mx-2" size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
