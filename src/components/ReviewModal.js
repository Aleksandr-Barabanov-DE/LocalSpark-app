import React, { useState } from "react";
import "../styles/review-modal.css";

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [reviewText, setReviewText] = useState("");

  const handleInputChange = (e) => setReviewText(e.target.value);

  const handleSubmit = () => {
    onSubmit(reviewText);
    setReviewText("");
    onClose();
  };

  if (!isOpen) return null; // Если модальное окно закрыто, ничего не отображаем

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add a Review</h2>
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
