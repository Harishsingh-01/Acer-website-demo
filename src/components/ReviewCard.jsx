import { FaStar } from 'react-icons/fa';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card card">
            <div className="review-rating">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={index < review.rating ? 'star-filled' : 'star-empty'}
                    />
                ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
                <div className="author-avatar">
                    {review.author.charAt(0)}
                </div>
                <div className="author-info">
                    <h5>{review.author}</h5>
                    <p>{review.course}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
