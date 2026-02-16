import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Where are classes conducted?",
            answer: "All classes are conducted offline at our Acer Institute center near Krishna Nagar Chowraha, Mathura. We have different batches with multiple timings to suit your schedule."
        },
        {
            question: "Do you provide certificates after course completion?",
            answer: "Yes, we provide certificates upon successful completion of each course. Our certificates are recognized and help in building your professional profile."
        },
        {
            question: "What is the ideal batch size?",
            answer: "We maintain small batch sizes of 12-20 students to ensure personalized attention and maximum interaction with the instructor."
        },
        {
            question: "Can I get a refund if I am not satisfied?",
            answer: "Yes, we have a student-friendly refund policy. If you are not satisfied with the demo class, you can request a full refund within the first week."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                <h3>{faq.question}</h3>
                                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
