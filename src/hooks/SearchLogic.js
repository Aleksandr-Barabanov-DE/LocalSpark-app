// SearchLogic.js
import { useState } from "react";

export function useSearchLogic(cities, setCurrentCityIndex) {
  const [inputValue, setInputValue] = useState("");

  const onChangeEvent = (event) => setInputValue(event.target.value);

  const findTheCity = () => {
    const foundCityIndex = cities.findIndex((city) =>
      city.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (foundCityIndex !== -1) {
      setCurrentCityIndex(foundCityIndex);
      setInputValue("");
    } else {
      alert("City not found");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      findTheCity();
    }
  };

  return { inputValue, onChangeEvent, findTheCity, handleKeyPress };
}
