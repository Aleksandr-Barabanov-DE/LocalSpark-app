import React, { useState } from "react";
import "../styles/review-modal.css";

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [reviewText, setReviewText] = useState("");
  const [error, setError] = useState(""); // состояние для ошибки

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
    if (e.target.value.length >= 20) {
      setError(""); // очищаем ошибку, если текст соответствует минимальной длине
    }
  };

  const handleSubmit = () => {
    if (reviewText.length < 20) {
      setError("Your review must be at least 20 characters long.");
      return;
    }
    onSubmit(reviewText);
    setReviewText("");
    onClose();
  };

  if (!isOpen) return null; // Если модальное окно закрыто, ничего не отображаем

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add a Review</h2>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Сообщение об ошибке */}
        <textarea
          value={reviewText}
          onChange={handleInputChange}
          placeholder="Write your review here..."
          rows="4"
        />
        <div className="modal-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
