import React, { useState } from "react";
import { cities } from "../data/data";

export default function TopSearched({ setCurrentCityIndex }) {
  const [citiesTopList] = useState(cities);

  const sendIndex = (index) => () => {
    setCurrentCityIndex(index);
  };

  return (
    <div>
      <section className="top-searched-section">
        <h3 className="top-searched-section-title">Top Searched Cities</h3>
        <ul className="top-searched-cities-container">
          {citiesTopList.slice(0, 3).map((city, index) => (
            <li className="top-city" key={index} onClick={sendIndex(index)}>
              <h4 className="top-city-name">{city.name}</h4>
              <img
                className="top-city-preview"
                src={city.image}
                alt={city.name}
              />
              <p className="top-city-rating">
                Rating:{" "}
                <span className="top-city-rating-number">
                  {" "}
                  {(
                    city.ratings.reduce((acc, num) => acc + num, 0) /
                      city.ratings.length || 0
                  ).toFixed(2)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
