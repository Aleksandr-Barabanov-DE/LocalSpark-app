import React from "react";

export default function Reviews({
  comments,
  addReview,
  deleteReview,
  currentUserId,
}) {
  return (
    <div>
      <section className="review-section">
        <h4 className="review-section-title">City Reviews:</h4>
        <ul className="review-section-list">
          {comments.map((comment, index) => (
            <li className="review-section-item" key={index}>
              "{comment.text}"
              {comment.userId === currentUserId && (
                <button
                  className="review-section-button"
                  onClick={() => deleteReview(comment.userId)}
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
        <button className="review-section-button" onClick={addReview}>
          Add review
        </button>
      </section>
    </div>
  );
}
