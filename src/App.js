import "./App.css";
import { useEffect, useState } from "react";
import { cities } from "./data/data";
import CityInfo from "./components/CityInfo";
import NavigationButtons from "./components/NavigationButtons";
import Reviews from "./components/Reviews";
import TopSearched from "./components/topSearched";
import Header from "./components/Header";
import ReviewModal from "./components/ReviewModal";

function App() {
  const [currentUserId] = useState("ghdtrnv34m5");
  const [inputValue, setInputValue] = useState("");
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCity = cities[currentCityIndex];
  const [cityName, setCityName] = useState(currentCity.name);
  const [ratings, setRatings] = useState(currentCity.ratings);
  const [description, setDescription] = useState(currentCity.description);
  const [cityPicture, setCityPicture] = useState(currentCity.image);
  const [comments, setComments] = useState(currentCity.reviews);
  const [averageRating, setAverageRating] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Ratings Section...........................................................
  const addRating = (num, currentUserId) => {
    setRatings((prevRatings) => {
      // Check if the user has already rated
      const userHasRated = prevRatings.some(
        (rating) => rating.userId === currentUserId
      );

      // If the user has already rated, return the previous ratings unchanged
      if (userHasRated) {
        alert("you have already rated");
        return prevRatings;
      }

      // If the user has not rated, add the new rating
      return [...prevRatings, { rating: num, userId: currentUserId }];
    });
  };

  useEffect(() => {
    // Accessing ratings array directly and mapping to retrieve rating values
    const currentArrRating = ratings.map((item) => item.rating);

    const total = currentArrRating.reduce((acc, num) => acc + num, 0);
    const shownRating =
      currentArrRating.length > 0 ? total / currentArrRating.length : 0;
    setAverageRating(shownRating.toFixed(2));
  }, [ratings]);

  // Navigation................................................................
  const nextCity = () => {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  };

  const previousCity = () => {
    setCurrentCityIndex(
      (prevIndex) => (prevIndex - 1 + cities.length) % cities.length
    );
  };

  // Reviews...................................................................
  const addReview = (reviewText) => {
    const newComment = { userId: currentUserId, text: reviewText };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const deleteReview = (userId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.userId !== userId)
    );
  };

  // Input + Find..............................................................
  const onChangeEvent = (event) => {
    setInputValue(event);
  };

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

  // Cities Rendering.........................................................
  useEffect(() => {
    const newCity = cities[currentCityIndex];
    setCityName(newCity.name);
    setRatings(newCity.ratings);
    setDescription(newCity.description);
    setCityPicture(newCity.image);
    setComments(newCity.reviews);
  }, [currentCityIndex]);

  return (
    <div className="app-container">
      <Header
        placeholder="write the city name here..."
        inputValue={inputValue}
        onChangeEvent={onChangeEvent}
        findTheCity={findTheCity}
        handleKeyPress={handleKeyPress}
      />
      <div className="app-wrapper">
        <section className="app-main-item">
          <CityInfo
            cityName={cityName}
            cityPicture={cityPicture}
            averageRating={averageRating}
            description={description}
            addRating={addRating}
          />
          <NavigationButtons previousCity={previousCity} nextCity={nextCity} />
          <Reviews
            comments={comments}
            addReview={openModal} // Открытие модального окна
            deleteReview={deleteReview}
            currentUserId={currentUserId}
          />
        </section>

        <TopSearched setCurrentCityIndex={setCurrentCityIndex} />
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={(reviewText) => {
          addReview(reviewText);
          closeModal();
        }}
      />
    </div>
  );
}

export default App;
