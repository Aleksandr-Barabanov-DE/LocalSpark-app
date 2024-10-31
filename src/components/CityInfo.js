import React from "react";

export default function CityInfo({
  cityName,
  cityPicture,
  averageRating,
  description,
  addRating,
  currentUserId,
}) {
  return (
    <div className="main-item-wrapper">
      <div className="main-item-left-section">
        <h2 className="main-item-name">City: {cityName}</h2>
        <img className="main-item-picture" src={cityPicture} alt={cityName} />
        <h2>
          Average rating: <span>{averageRating}</span>{" "}
        </h2>
      </div>
      <div className="main-item-right-section">
        <p className="main-item-description">{description}</p>
        <div className="main-item-rating-section">
          <h4>You can rate this city:</h4>
          <div className="rating-buttons-container">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
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
