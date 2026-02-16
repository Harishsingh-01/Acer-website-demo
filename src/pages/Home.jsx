import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaGraduationCap, FaRocket } from 'react-icons/fa';
import SuccessCounter from '../components/SuccessCounter';
import CourseCard from '../components/CourseCard';
import ReviewSlider from '../components/ReviewSlider';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses');
                setCourses(response.data); // Show all courses (only 2)
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text fade-in-up">
                        <h1>Transform Your Future with <span className="gradient-text">Acer Institute</span></h1>
                        <p>Master Spoken English, Build Confidence, Ace Interviews & Transform Your Personality - Mathura's Highest Rated Institute with 4.9⭐ (1100+ Reviews)</p>
                        <div className="hero-buttons">
                            <Link to="/courses" className="btn btn-primary btn-lg">
                                <FaGraduationCap /> Explore Courses
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-lg">
                                <FaRocket /> Book Free Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Counters */}
            <section className="counters-section">
                <div className="container">
                    <div className="counters-grid">
                        <SuccessCounter end={800} label="Happy Students" suffix="+" />
                        <SuccessCounter end={10} label="Years Experience" suffix="+" />
                        <SuccessCounter end={4.9} label="Google Rating" suffix="★" />
                    </div>
                </div>
            </section>

            {/* Our Courses */}
            <section className="section featured-courses">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose Your Perfect Package</h2>
                        <p>Two comprehensive options to master English and transform your personality</p>
                    </div>

                    {loading ? (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="courses-package-grid">
                            {courses.map(course => (
                                <CourseCard key={course._id} course={course} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Student Reviews */}
            <section className="section reviews-section">
                <div className="container">
                    <ReviewSlider />
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Join thousands of successful students and transform your future today!</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Enroll Now <FaRocket />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
