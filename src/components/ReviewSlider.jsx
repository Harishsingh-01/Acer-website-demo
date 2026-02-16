import { useEffect, useRef } from 'react';
import './ReviewSlider.css';

const ReviewSlider = () => {
    const sliderRef = useRef(null);

    // Real Google Reviews Data
    const reviews = [
        {
            author: 'Yug Sharma',
            time: 'a month ago',
            text: 'Acer Institute provides a supportive learning environment with knowledgeable faculty. The teachers explain concepts clearly and are always ready to help students. The study material is useful, and regular tests help in self-evaluation. Overall, it is a good institute for academic growth.',
            rating: 5
        },
        {
            author: 'Amit Sharma',
            time: 'a month ago',
            text: 'Acer English Speaking Institute is very helpful for improving spoken English, communication skills, personality development, interview skills, and body language. The trainers are supportive and the sessions are practical and confidence-boosting. Overall, it\'s a great place to enhance communication and self-confidence.',
            rating: 5
        },
        {
            author: 'Sunny Rajput',
            time: '9 months ago',
            text: 'One of the best english speaking institute in Mathura. i like teaching style. Environment is too good. Every day stage presentation and group discussion classes.',
            rating: 5
        },
        {
            author: 'Chanchal Sharma',
            time: '9 months ago',
            text: 'This institute helped me to improve my English. Now I can speak fluent English. The trainers are very supportive. I love this place. Best english speaking institute in Mathura.',
            rating: 5
        },
        {
            author: 'Sundar Lal',
            time: '10 months ago',
            text: 'The English speaking course really boosted my confidence and fluency. The classes were interactive, and I enjoyed learning new words and practicing real-life conversations. It was a fun and helpful experience. Thanks',
            rating: 5
        },
        {
            author: 'Trade com',
            time: '4 weeks ago',
            text: 'I have learn so many things from the acer institute of english speaking classes',
            rating: 5
        },
        {
            author: 'Ashrita Tiwari',
            time: '11 months ago',
            text: 'I feel wonderful here. This is best institute for spoken English in Mathura city. Way of teaching is fabulous. Environment is outstanding.',
            rating: 5
        },
        {
            author: 'Raghu Santosh',
            time: '7 months ago',
            text: 'Acer institute is the best place to build confidence, improve communication, and master fluent English.',
            rating: 5
        },
        {
            author: 'Devendra Nagar',
            time: 'a year ago',
            text: 'The environment of the acer institution is really very good and also sir provide to participation in communication activities like debates, group discussions and speech its really good to learn English.',
            rating: 5
        },
        {
            author: 'Lalit Singh',
            time: '3 years ago',
            text: 'Best English speaking coaching in the Mathura. Sir is very humble and very punctual at his work. If you want success in your life come to the acer institute. And best for personality development also.',
            rating: 5
        },
        {
            author: 'Unnati Parashar',
            time: 'a year ago',
            text: 'I liked the environment of acer institute. I improved my confidence and english. I learned how to face people. Good english speaking institute in Mathura.',
            rating: 5
        },
        {
            author: 'Janvi Solanki',
            time: 'a year ago',
            text: 'Best place for English speaking course in Mathura. Best environment. Every day group discussion classes and presentation classes. Way of teaching is superb. I improved a lot here.',
            rating: 5
        },
        {
            author: 'Gaurav Chaudhary',
            time: '2 years ago',
            text: 'In opinion acer is helpful for spoken english but it could be better if they conduct more organised sessions for improvement in specific area like reading session, grammar session, vocab session debate and gd apart from that some other activities',
            rating: 4
        },
        {
            author: 'Harsh Saraswat',
            time: 'a year ago',
            text: 'This Institute is very helpful for all those students who don\'t know how to speak English. Perfect coaching for english speaking in Mathura.',
            rating: 5
        }
    ];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let scrollInterval;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10) {
                    // Reset to beginning
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll by one card width
                    slider.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }, 3000); // Auto-scroll every 3 seconds
        };

        const stopAutoScroll = () => {
            clearInterval(scrollInterval);
        };

        startAutoScroll();

        // Pause on hover
        slider.addEventListener('mouseenter', stopAutoScroll);
        slider.addEventListener('mouseleave', startAutoScroll);

        return () => {
            stopAutoScroll();
            slider.removeEventListener('mouseenter', stopAutoScroll);
            slider.removeEventListener('mouseleave', startAutoScroll);
        };
    }, []);

    const renderStars = (rating) => {
        return '⭐'.repeat(rating);
    };

    return (
        <div className="review-slider-container">
            <div className="section-title">
                <h2>What Our Students Say</h2>
                <p>Real reviews from Google - 4.9⭐ rating with 550+ reviews</p>
            </div>
            <div className="review-slider" ref={sliderRef}>
                {reviews.map((review, index) => (
                    <div key={index} className="review-slide card">
                        <div className="review-header">
                            <div className="review-author">
                                <div className="author-avatar">
                                    {review.author.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4>{review.author}</h4>
                                    <p className="review-time">{review.time}</p>
                                </div>
                            </div>
                            <div className="review-rating">{renderStars(review.rating)}</div>
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="google-badge">
                            <span>Google Review</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-hint">← Swipe or wait for auto-scroll →</div>
        </div>
    );
};

export default ReviewSlider;
