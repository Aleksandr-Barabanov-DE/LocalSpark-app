// NavigationLogic.js
import { useState, useEffect } from "react";

export function useNavigationLogic(cities) {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const nextCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const previousCity = () => {
    setCurrentCityIndex(
      (prevIndex) => (prevIndex - 1 + cities.length) % cities.length
    );
  };

  useEffect(() => {
    // Update city details or other dependencies when currentCityIndex changes
  }, [currentCityIndex]);

  return { currentCityIndex, nextCity, previousCity, setCurrentCityIndex };
}
