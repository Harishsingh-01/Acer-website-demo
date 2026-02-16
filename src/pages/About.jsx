import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-hero">
                <div className="container">
                    <h1>About Acer Institute</h1>
                    <p>Transforming lives through quality education since 2010</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            <img src="https://i.ibb.co/49FRMgz/acer-institute-for-education-and-languages-krishna-nagar-mathura-tutorials-for-english-grammar-tls8k.png" alt="Acer Institute Mathura" />
                        </div>
                        <div className="about-content">
                            <h2>Our Story</h2>
                            <p>
                                Acer Institute for Education and Languages, located in the heart of Mathura near Krishna Nagar Chowraha,
                                is one of the most trusted English language and personality development institutes in the region. Founded by
                                Ashish Jadaun, we have transformed the lives of over 1200+ students with our interactive teaching methods.
                            </p>
                            <p>
                                With a stellar 4.9⭐ rating on Google (550+ reviews) and Justdial (620+ reviews), we pride ourselves on
                                delivering quality education in Spoken English, Personality Development, Interview Preparation, and more.
                                Our focus on practical communication, confidence building, and real-world applications has made us the
                                preferred choice for students and professionals in Mathura and surrounding areas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section values-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card card">
                            <div className="value-icon">🎯</div>
                            <h3>Excellence</h3>
                            <p>We strive for excellence in all aspects of education and student support</p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">🤝</div>
                            <h3>Integrity</h3>
                            <p>We maintain the highest standards of honesty and ethical behavior</p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">💡</div>
                            <h3>Innovation</h3>
                            <p>We continuously evolve our teaching methods to stay ahead</p>
                        </div>
                        <div className="value-card card">
                            <div className="value-icon">❤️</div>
                            <h3>Care</h3>
                            <p>We genuinely care about each student's success and well-being</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section mission-section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <h2>Our Mission</h2>
                            <p>
                                To empower individuals with world-class education, language skills, and personality development,
                                enabling them to achieve their academic and career goals while becoming confident global citizens.
                            </p>
                        </div>
                        <div className="mission-card">
                            <h2>Our Vision</h2>
                            <p>
                                To be India's most trusted and innovative educational institution, recognized for transforming lives
                                through quality coaching and creating success stories that inspire generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
