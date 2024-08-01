// src/components/Logo.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../assets/logo.png'; // Make sure to replace with the correct path

// Keyframes for the color spread effect
const colorSpread = keyframes`
  0% {
    clip-path: circle(0% at 90% 90%);
  }
  100% {
    clip-path: circle(150% at 90% 90%);
  }
`;

// Keyframes for the fade-out effect
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// Overlay that covers the screen and spreads
const ColorOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ef99b1; /* Adjust the color as needed */
  z-index: 999; /* Ensure it covers all other elements */
  clip-path: circle(0% at 90% 90%);
  animation: ${colorSpread} 2s forwards;
  opacity: ${({ fade }) => (fade ? '0' : '1')};
  transition: opacity 0.5s;
`;

// Container for the logo
const LogoContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000; /* Ensure it is on top of other elements */
`;

// Styled image element
const LogoImage = styled.img`
  width: 50px; /* Adjust the size as needed */
  height: auto;
  cursor: pointer; /* Indicate that it is clickable */
`;

const Logo = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); // Correct hook for navigation

  const handleClick = () => {
    setIsClicked(true);
    setFadeOut(false);

    // Simulate content loading (e.g., API calls, resource loading)
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          navigate('/blog'); // Use navigate to change route
        }, 50); // Duration of the fade-out transition
      }, 50); // Duration before starting the fade-out animation
    }, 2000); // Duration of the spread animation
  };

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setIsClicked(false);
        setLoading(true);
      }, 500); // Match the duration of the fade-out transition
    }
  }, [fadeOut]);

  return (
    <>
      {isClicked && <ColorOverlay fade={fadeOut} />}
      <LogoContainer onClick={handleClick}>
        <LogoImage src={logoImage} alt="Logo" />
      </LogoContainer>
    </>
  );
};

export default Logo;
