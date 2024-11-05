// ReviewLogic.js
import { useState } from "react";

export function useReviewLogic(currentCityIndex, cities, currentUserId) {
  const [comments, setComments] = useState(cities[currentCityIndex].reviews);

  const addReview = (reviewText) => {
    const newComment = { userId: currentUserId, text: reviewText };
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const deleteReview = (userId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.userId !== userId)
    );
  };

  return { comments, addReview, deleteReview };
}
