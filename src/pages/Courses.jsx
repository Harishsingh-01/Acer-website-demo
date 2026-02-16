import { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from '../components/CourseCard';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className="courses-page">
            <div className="page-hero">
                <div className="container">
                    <h1>Our Course Packages</h1>
                    <p>Choose the perfect package for your learning journey - Hover to see features</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {loading ? (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        <div className="courses-grid">
                            {courses.map(course => (
                                <CourseCard key={course._id} course={course} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Courses;
