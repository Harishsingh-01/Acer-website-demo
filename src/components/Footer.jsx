import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <div className="logo-icon">A</div>
                            <div className="logo-text">
                                <span className="logo-name">ACER INSTITUTE</span>
                                <span className="logo-tagline">Education & Languages</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Mathura's highest rated English speaking institute with 4.9⭐ rating. Transforming students through quality education since 2014.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/teachers">Faculty</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Our Packages</h3>
                        <ul className="footer-links">
                            <li><Link to="/courses">3-Month Spoken English (₹3000)</Link></li>
                            <li><Link to="/courses">Lifetime English Mastery (₹5000)</Link></li>
                            <li><Link to="/contact">Book Free Demo Class</Link></li>
                            <li><Link to="/blog">Study Tips & Resources</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <FaPhone />
                                <span>+91 94570 53512</span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span>acerinstitute.mathura@gmail.com</span>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>Near Krishna Nagar Chowraha, Radha Nagar Road, Mathura, UP 281001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Acer Institute. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/contact">Privacy Policy</Link>
                        <Link to="/contact">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
