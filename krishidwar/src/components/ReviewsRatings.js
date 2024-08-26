import React, { useState } from 'react';


function ReviewsRatings() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmitReview = () => {
    // Submit review to backend
    setReviews([...reviews, { review: newReview, rating }]);
    setNewReview('');
    setRating(0);
  };

  return (
    <div className="reviews-ratings">
      <h3>Reviews & Ratings</h3>
      {reviews.map((review, index) => (
        <div className="review-item" key={index}>
          <p>{review.review} - {review.rating}/5</p>
        </div>
      ))}
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write a review"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating out of 5"
        max={5}
      />
      <button onClick={handleSubmitReview}>Submit Review</button>
    </div>
  );
}

export default ReviewsRatings;
