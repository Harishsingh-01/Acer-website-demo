import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import './CourseCard.css';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <div className="course-card-inner">
                {/* Front Side */}
                <div className="course-card-front">
                    <div className="course-image">
                        <img src={course.image} alt={course.title} />
                        <span className="course-badge">{course.duration}</span>
                    </div>
                    <div className="course-content">
                        <h3>{course.title}</h3>
                        <p>{course.shortDescription}</p>
                        <div className="course-meta">
                            <div className="course-duration">
                                <FaClock />
                                <span>{course.duration}</span>
                            </div>
                            <div className="course-price">
                                ₹{course.price.toLocaleString('en-IN')}
                            </div>
                        </div>
                    </div>
                    <div className="flip-hint">Hover to see features →</div>
                </div>

                {/* Back Side */}
                <div className="course-card-back">
                    <h3>What You'll Get</h3>
                    <ul className="course-features-list">
                        {course.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <Link to={`/courses/${course._id}`} className="course-enroll-btn">
                        View Details & Enroll
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
