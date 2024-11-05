import { useEffect, useState } from "react";

export function useRatingLogic(currentCityIndex, cities, currentUserId) {
  const [ratings, setRatings] = useState(cities[currentCityIndex].ratings);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const currentArrRating = ratings.map((item) => item.rating);
    const total = currentArrRating.reduce((acc, num) => acc + num, 0);
    const shownRating =
      currentArrRating.length > 0 ? total / currentArrRating.length : 0;
    setAverageRating(shownRating.toFixed(2));
  }, [ratings]);

  useEffect(() => {
    setRatings(cities[currentCityIndex].ratings);
  }, [currentCityIndex, cities]);

  const addRating = (num) => {
    setRatings((prevRatings) => {
      const userHasRated = prevRatings.some(
        (rating) => rating.userId === currentUserId
      );
      if (userHasRated) {
        alert("You have already rated this city");
        return prevRatings;
      }
      const updatedRatings = [
        ...prevRatings,
        { rating: num, userId: currentUserId },
      ];

      const updatedCities = [...cities];
      updatedCities[currentCityIndex].ratings = updatedRatings;
      return updatedRatings;
    });
  };

  return { ratings, averageRating, addRating };
}
