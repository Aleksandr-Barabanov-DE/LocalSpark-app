import "./App.css";
import { useState } from "react";
import { cities } from "./data/data";
import CityInfo from "./components/CityInfo";
import NavigationButtons from "./components/NavigationButtons";
import Reviews from "./components/Reviews";
import TopSearched from "./components/TopSearched";
import Header from "./components/Header";
import ReviewModal from "./components/ReviewModal";
import { useRatingLogic } from "./hooks/RatingLogic";
import { useNavigationLogic } from "./hooks/NavigationLogic";
import { useReviewLogic } from "./hooks/ReviewLogic";
import { useSearchLogic } from "./hooks/SearchLogic";

function App() {
  const [currentUserId] = useState("ghdtrnv34m5");
  const { currentCityIndex, nextCity, previousCity, setCurrentCityIndex } =
    useNavigationLogic(cities);
  const { averageRating, addRating } = useRatingLogic(
    currentCityIndex,
    cities,
    currentUserId
  );
  const { comments, addReview, deleteReview } = useReviewLogic(
    currentCityIndex,
    cities,
    currentUserId
  );
  const { inputValue, onChangeEvent, findTheCity, handleKeyPress } =
    useSearchLogic(cities, setCurrentCityIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCity = cities[currentCityIndex];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            cityName={currentCity.name}
            cityPicture={currentCity.image}
            averageRating={averageRating}
            description={currentCity.description}
            addRating={addRating}
          />
          <NavigationButtons previousCity={previousCity} nextCity={nextCity} />
          <Reviews
            comments={comments}
            addReview={openModal}
            deleteReview={deleteReview}
            currentUserId={currentUserId}
          />
        </section>
        <TopSearched
          cities={cities}
          setCurrentCityIndex={setCurrentCityIndex}
        />
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
