import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function CityInfo({
  cityName,
  cityPicture,
  averageRating,
  description,
  addRating,
  currentUserId,
}) {
  const objMainCity = useRef();
  const ratingButtons = useRef([]);
  const currentRating = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      objMainCity.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3, duration: 1 }
    );
    gsap.fromTo(
      ratingButtons.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 0.5, duration: 0.3, stagger: 0.2 }
    );
    gsap.fromTo(
      currentRating.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div ref={objMainCity} className="main-item-wrapper">
      <div className="main-item-left-section">
        <h2 className="main-item-name">City: {cityName}</h2>
        <img className="main-item-picture" src={cityPicture} alt={cityName} />
        <h2 ref={currentRating}>
          Average rating: <span>{averageRating}</span>
        </h2>
      </div>
      <div className="main-item-right-section">
        <p className="main-item-description">{description}</p>
        <div className="main-item-rating-section">
          <h4>You can rate this city:</h4>
          <div className="rating-buttons-container">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <button
                ref={(el) => (ratingButtons.current[index] = el)}
                className="rating-button"
                key={num}
                onClick={() => addRating(num, currentUserId)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
