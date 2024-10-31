import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Reviews({
  comments,
  addReview,
  deleteReview,
  currentUserId,
}) {
  const reviewSection = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      reviewSection.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, delay: 0.5, duration: 1 }
    );
  }, []);

  return (
    <div>
      <section ref={reviewSection} className="review-section">
        <h4 className="review-section-title">City Reviews:</h4>
        <ul className="review-section-list">
          {comments.map((comment, index) => (
            <li className="review-section-item" key={index}>
              "{comment.text}"
              {comment.userId === currentUserId && (
                <button
                  className="review-section-button delete-button"
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
