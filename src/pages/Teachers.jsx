import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGraduationCap, FaUserTie, FaUsers, FaClock } from 'react-icons/fa';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('/api/teachers');
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTeachers();
    }, []);

    return (
        <div className="teachers-page">
            <div className="page-hero">
                <div className="container">
                    <h1>Meet Our Director</h1>
                    <p>Learn from the visionary leader of Acer Institute Mathura</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {loading ? (
                        <div className="spinner-container">
                            <div className="spinner"></div>
                        </div>
                    ) : (
                        teachers.map(teacher => (
                            <div key={teacher._id} className="teacher-profile-card">
                                {/* Top Section - Image and Basic Info */}
                                <div className="teacher-top-section">
                                    <div className="teacher-image-wrapper">
                                        <img src={teacher.image} alt={teacher.name} />
                                    </div>
                                    <div className="teacher-basic-info">
                                        <h2>{teacher.name}</h2>
                                        <p className="teacher-designation">
                                            <FaUserTie /> {teacher.designation}
                                        </p>
                                        <div className="teacher-quick-stats">
                                            <div className="stat-item">
                                                <FaClock />
                                                <span>{teacher.experience} Experience</span>
                                            </div>
                                            <div className="stat-item">
                                                <FaUsers />
                                                <span>1200+ Students</span>
                                            </div>
                                            <div className="stat-item">
                                                <FaGraduationCap />
                                                <span>4.9⭐ Rating</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Details Section */}
                                <div className="teacher-details-section">
                                    <div className="teacher-info-grid">
                                        <div className="info-card">
                                            <h3>📚 Education</h3>
                                            <p>{teacher.education}</p>
                                        </div>

                                        <div className="info-card">
                                            <h3>🎯 Specializations</h3>
                                            <div className="specialization-tags">
                                                {teacher.specialization.map((spec, idx) => (
                                                    <span key={idx} className="spec-tag">{spec}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="info-card full-width">
                                            <h3>👨‍🏫 About {teacher.name.split(' ')[0]} Sir</h3>
                                            <p>{teacher.bio}</p>
                                        </div>
                                    </div>

                                    <div className="achievement-highlights">
                                        <div className="achievement-item">
                                            <div className="achievement-icon">🏆</div>
                                            <div>
                                                <h4>Founded Acer Institute</h4>
                                                <p>Mathura's most trusted English institute</p>
                                            </div>
                                        </div>
                                        <div className="achievement-item">
                                            <div className="achievement-icon">⭐</div>
                                            <div>
                                                <h4>4.9 Star Rating</h4>
                                                <p>1100+ verified reviews</p>
                                            </div>
                                        </div>
                                        <div className="achievement-item">
                                            <div className="achievement-icon">🎓</div>
                                            <div>
                                                <h4>1200+ Students</h4>
                                                <p>Transformed through education</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

export default Teachers;
