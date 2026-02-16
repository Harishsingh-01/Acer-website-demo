import { useState } from 'react';
import axios from 'axios';
import GoogleMap from '../components/GoogleMap';
import FAQSection from '../components/FAQSection';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await axios.post('/api/contact', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', course: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            alert('Error submitting form. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-hero small-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us for any queries or enrollment</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Send Us a Message</h2>
                            <p className="form-description">Fill out the form and our team will get back to you within 24 hours.</p>

                            {submitted && (
                                <div className="success-message">
                                    <p>✅ Thank you! We've received your message and will contact you soon.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="course">Interested Course Package</label>
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a package</option>
                                        <option value="3-Month Spoken English">3-Month Spoken English Course (₹3000)</option>
                                        <option value="Lifetime English Mastery">Lifetime English Mastery Program (₹5000)</option>
                                        <option value="Demo Class">Book Free Demo Class</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={submitting}>
                                    {submitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <h3>Contact Information</h3>
                            <div className="contact-info-cards">
                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaPhone />
                                    </div>
                                    <div className="info-content">
                                        <h4>Phone</h4>
                                        <p>+91 94570 53512</p>
                                        <p className="info-note">Mon-Sat, 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>acerinstitute.mathura@gmail.com</p>
                                        <p className="info-note">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-content">
                                        <h4>Address</h4>
                                        <p>Near Krishna Nagar Chowraha</p>
                                        <p>Radha Nagar Road, Mathura</p>
                                        <p>Uttar Pradesh 281001</p>
                                        <p className="info-note">Visit us for a demo class</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="section map-section">
                <div className="container">
                    <h2 className="section-heading">Find Us Here</h2>
                    <GoogleMap />
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />
        </div>
    );
};

export default Contact;
