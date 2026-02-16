import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaClock, FaUsers, FaCheckCircle, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import './CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await axios.get(`/api/courses/${id}`);
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching course:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [id]);

    if (loading) {
        return (
            <div className="loading-page">
                <div className="spinner"></div>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="error-page">
                <h2>Course not found</h2>
                <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
            </div>
        );
    }

    return (
        <div className="course-detail-page">
            <div className="course-header" style={{ backgroundImage: `url(${course.image})` }}>
                <div className="course-header-overlay"></div>
                <div className="container course-header-content">
                    <div className="course-badge">{course.category}</div>
                    <h1>{course.title}</h1>
                    <p className="course-subtitle">{course.shortDescription}</p>
                    <div className="course-meta-header">
                        <div className="meta-item">
                            <FaClock /> {course.duration}
                        </div>
                        <div className="meta-item">
                            <FaUsers /> {course.enrolled} enrolled
                        </div>
                        <div className="meta-item level-badge">{course.level}</div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="course-detail-grid">
                        <div className="course-main-content">
                            <div className="content-section">
                                <h2>About This Course</h2>
                                <p>{course.description}</p>
                            </div>

                            <div className="content-section">
                                <h2>What You'll Learn</h2>
                                <ul className="features-list">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>
                                            <FaCheckCircle className="check-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="content-section">
                                <h2>Why Choose Acer Institute?</h2>
                                <div className="benefits-grid">
                                    <div className="benefit-card">
                                        <h4>Expert Faculty</h4>
                                        <p>Learn from experienced professionals</p>
                                    </div>
                                    <div className="benefit-card">
                                        <h4>Flexible Timings</h4>
                                        <p>Classes that fit your schedule</p>
                                    </div>
                                    <div className="benefit-card">
                                        <h4>Study Materials</h4>
                                        <p>Comprehensive learning resources</p>
                                    </div>
                                    <div className="benefit-card">
                                        <h4>Proven Results</h4>
                                        <p>98% student success rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="course-sidebar">
                            <div className="pricing-card card">
                                <div className="price-tag">
                                    <span className="price-label">Course Fee</span>
                                    <span className="price-amount">₹{course.price.toLocaleString('en-IN')}</span>
                                </div>

                                <Link to="/contact" className="btn btn-primary btn-full">
                                    <FaArrowRight /> Enroll Now
                                </Link>

                                <a href="tel:+919457053512" className="btn btn-secondary btn-full">
                                    <FaPhoneAlt /> Call to Inquire
                                </a>

                                <div className="course-includes">
                                    <h4>This course includes:</h4>
                                    <ul>
                                        <li><FaCheckCircle /> {course.duration} of training</li>
                                        <li><FaCheckCircle /> Study materials included</li>
                                        <li><FaCheckCircle /> Certificate of completion</li>
                                        <li><FaCheckCircle /> Lifetime access to resources</li>
                                        <li><FaCheckCircle /> Expert guidance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetail;
