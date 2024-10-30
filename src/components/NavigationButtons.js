import React from "react";

export default function NavigationButtons({ previousCity, nextCity }) {
  return (
    <div className="navigation-buttons-container">
      <button className="navigation-button" onClick={previousCity}>
        Previous City
      </button>
      <button className="navigation-button" onClick={nextCity}>
        Next City
      </button>
    </div>
  );
}
