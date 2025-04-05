// UniversityCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './UniversityCarousel.css';
import { Link } from 'react-router-dom';
const UniversityCarousel = ({ universities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const totalItems = universities.length;
  // Define visible items based on screen size (handled in CSS)
  const visibleItems = 4;
  const maxIndex = Math.max(0, totalItems - visibleItems);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto scrolling with pause on hover
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, isHovering]);

  return (
    <div className="university-carousel-container">
      <h2 className="carousel-title">Featured Universities</h2>
      
      <div className="carousel-controls">
        <button 
          className={`carousel-arrow prev ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <span>&lt;</span>
        </button>
        
        <div 
          className="carousel-wrapper"
          ref={carouselRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {universities.map((university, index) => (
              
              <div className="carousel-item" key={index}>
                <div className="university-card">
                  <div className="university-image">
                    <img src={university.image} alt={university.name} />
                    <div className="university-country">
                      <span>{university.country}</span>
                    </div>
                  </div>
                  <div className="university-info">
                    <h3>{university.name}</h3>
                    <div className="university-details">
                      <span className="location">{university.location}</span>
                      <div className="university-ranking">
                        <span className="ranking-label">Rank:</span>
                        <span className="ranking-value">{university.ranking}</span>
                      </div>
                    </div>
                    <p className="university-description">{university.description}</p>
                    <div className="university-programs">
                      <span className="programs-count">{university.programCount} Programs</span>
                      <span className="tuition-fees">Tuition: {university.tuitionRange}</span>
                    </div>
                    <a href={`/college/${university.id}`} className="explore-button">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
        
        <button 
          className={`carousel-arrow next ${currentIndex === maxIndex ? 'disabled' : ''}`}
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
        >
          <span>&gt;</span>
        </button>
      </div>
      
      <div className="carousel-indicators">
        {Array.from({ length: Math.ceil(totalItems / visibleItems) }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${Math.floor(currentIndex / visibleItems) === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * visibleItems)}
          />
        ))}
      </div>
      
      <div className="carousel-view-all">
        <a href="/colleges" className="view-all-button">View All Universities</a>
      </div>
    </div>
  );
};

export default UniversityCarousel;