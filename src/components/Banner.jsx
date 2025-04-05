// Banner.jsx
import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = ({ 
  images, 
  autoSlide = true, 
  slideInterval = 5000,
  heading = "Study Abroad with Confidence",
  subheading = "Discover top universities worldwide and take the first step toward your international education journey",
  showButton = true,
  buttonText = "Explore Programs",
  buttonLink = "/seminars",
  overlay = true
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;
    
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);
    
    return () => clearInterval(intervalId);
  }, [autoSlide, images.length, slideInterval]);
  
  // Manual navigation
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };
  
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="banner">
      <div className="banner-images">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`banner-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            {overlay && <div className="banner-overlay"></div>}
          </div>
        ))}
      </div>
      
      <div className="banner-content">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        {showButton && (
          <a href={buttonLink} className="banner-button">
            {buttonText}
          </a>
        )}
      </div>
      
      {images.length > 1 && (
        <>
          <button className="banner-nav prev" onClick={prevSlide}>
            <span className="arrow">&lt;</span>
          </button>
          <button className="banner-nav next" onClick={nextSlide}>
            <span className="arrow">&gt;</span>
          </button>
          
          <div className="banner-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`banner-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;