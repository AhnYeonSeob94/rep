import React, { useState } from 'react';
import './ReviewCard.style.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.content.length > 300;
  const preview = review.content.slice(0, 300);

  return (
    <div className={`review-card ${expanded ? 'expanded' : ''}`}>
      <h6 className="author">{review.author}</h6>
      <p className="review-text">
        {expanded || !isLong ? review.content : `${preview}...`}
      </p>
      {isLong && (
        <button
          className="toggle-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Hide <FaChevronUp />
            </>
          ) : (
            <>
              Read More <FaChevronDown />
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
