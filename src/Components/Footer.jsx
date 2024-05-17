import React, { useState } from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="footerContainer">
        <p 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          Monkey D. Type
        </p>
        <div className='iconFooter'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/juan-manuel-barbosa-desarrollador/">
            <FaLinkedin /><span>LinkedIn</span>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/juanManuelBarbosa/Monkey-D.-Type">
            <FaGithub /><span>GitHub</span>
          </a>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <p>Hecho por Barbosa Juan Manuel</p>
        </div>
      )}
    </>
  );
}

export default Footer;
